const initial = {
  openMenu: true
};
const menuPosition = (state = initial, action) => {
  switch (action.type) {
    case 'menu_status':
      return { openMenu: action.position };
    default:
      return state;
  }
};
export default menuPosition;
