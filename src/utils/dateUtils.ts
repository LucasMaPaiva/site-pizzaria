import { Unit, OpeningHours } from '../types';

export const DAYS_MAP: { [key: number]: string } = {
  0: 'dom',
  1: 'seg',
  2: 'ter',
  3: 'qua',
  4: 'qui',
  5: 'sex',
  6: 'sab',
};

export const getStatus = (unit: Unit) => {
  const now = new Date();
  const dayIndex = now.getDay();
  const dayKey = DAYS_MAP[dayIndex];
  const hours = unit.openingHours[dayKey];

  if (!hours || hours.closed) {
    return { isOpen: false, message: 'Fechado hoje' };
  }

  const [openH, openM] = hours.open.split(':').map(Number);
  const [closeH, closeM] = hours.close.split(':').map(Number);

  const openTime = new Date(now);
  openTime.setHours(openH, openM, 0, 0);

  const closeTime = new Date(now);
  closeTime.setHours(closeH, closeM, 0, 0);

  // Handle closing times after midnight
  if (closeH < openH) {
    if (now.getHours() >= openH) {
      closeTime.setDate(closeTime.getDate() + 1);
    } else {
      openTime.setDate(openTime.getDate() - 1);
    }
  }

  const isOpen = now >= openTime && now <= closeTime;

  if (isOpen) {
    return {
      isOpen: true,
      message: `Aberto até as ${hours.close}h`,
    };
  } else {
    if (now < openTime) {
      return {
        isOpen: false,
        message: `Abre às ${hours.open}h`,
      };
    } else {
      // Find next opening day
      let nextDayIndex = (dayIndex + 1) % 7;
      let daysAhead = 1;
      while (daysAhead < 7) {
        const nextDayKey = DAYS_MAP[nextDayIndex];
        const nextHours = unit.openingHours[nextDayKey];
        if (nextHours && !nextHours.closed) {
          const dayName = daysAhead === 1 ? 'amanhã' : nextDayKey;
          return {
            isOpen: false,
            message: `Abre ${dayName} às ${nextHours.open}h`,
          };
        }
        nextDayIndex = (nextDayIndex + 1) % 7;
        daysAhead++;
      }
      return { isOpen: false, message: 'Fechado' };
    }
  }
};
