export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const CHOOSE_MENU = 'CHOOSE_MENU';

export const chooseIncrement = (data) => (
  { type: INCREMENT, data }
);

export const chooseDecrement = (data) => (
  { type: DECREMENT, data }
);

export const chooseMenu = (data) => (
  { type: CHOOSE_MENU, data }
);