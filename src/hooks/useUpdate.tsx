import {useEffect, useRef} from 'react';

//页面从null到[]会刷新一次，再从[]到[data]还会刷新一次，使用该方法省略前面的一次刷新
const useUpdate = (fn: () => void, dep: any[]) => {
  const count = useRef(0);
  useEffect(() => {
    count.current += 1;
  });
  useEffect(() => {
    if (count.current > 1) {
      fn();
    }
  }, [fn,dep]);
};

export {useUpdate};