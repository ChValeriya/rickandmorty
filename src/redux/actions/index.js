export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const CHOOSE_MENU = 'CHOOSE_MENU';
export const CHOOSE_FAVORITES = 'CHOOSE_FAVORITES';

export const chooseIncrement = (data) => (
  { type: INCREMENT, data }
);

export const chooseDecrement = (data) => (
  { type: DECREMENT, data }
);

export const chooseMenu = (data) => (
  { type: CHOOSE_MENU, data }
);

export const chooseFavorites = (data) => (
  { type: CHOOSE_FAVORITES, data }
);