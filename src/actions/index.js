export const MENU_LOADED = 'MENU_LOADED';
export const MENU_REQUESTED = 'MENU_REQUESTED';
export const MENU_ERROR = 'MENU_ERROR';
export const ITEM_ADD_TO_CART = 'ITEM_ADD_TO_CART';
export const ITEM_REMOVE_FROM_CART = 'ITEM_REMOVE_FROM_CART';

const menuLoaded = newMenu => ({ type: MENU_LOADED, payload: newMenu });

const menuRequested = () => ({ type: MENU_REQUESTED });

const menuError = () => ({ type: MENU_ERROR });

const addedToCart = id => ({ type: ITEM_ADD_TO_CART, payload: id });

const deleteFromCart = id => ({ type: ITEM_REMOVE_FROM_CART, payload: id });

export { menuLoaded, menuRequested, menuError, addedToCart, deleteFromCart };
