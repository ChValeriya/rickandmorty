export const getLastStrItem = (str, smb) => {
  const arr =  str.split(smb);
  const lastItem = arr.length - 1;
  return arr[lastItem];
};