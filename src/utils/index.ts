import { useEffect, useState } from "react";

export const splitParams = (params: object) => {
  let str = "?";
  Object.keys(params).forEach((key) => {
    // @ts-ignore
    const val = params[key];
    if (val || val === 0) {
      str += `${key}=${val}&`;
    }
  });
  return str.slice(0, str.length - 1);
};

// hook一定要use开头
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useDebounce = <T>(value: T, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    // 上一个useEffect销毁前执行return中的函数
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};
