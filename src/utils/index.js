export const splitParams = (params) => {
  let str = "?";
  const obj = JSON.parse(JSON.stringify(params));
  Object.keys(obj).forEach((key) => {
    const val = obj[key];
    if (val || val === 0) {
      str += `${key}=${val}&`;
    }
  });
  return str.slice(0, str.length - 1);
};
