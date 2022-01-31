const open = (element: string) => {
  return { type: 'OPEN', status: { open: true, element } };
};
const close = () => {
  return { type: 'CLOSE', status: { open: false } };
};
export const modalAction = {
  close,
  open
};
