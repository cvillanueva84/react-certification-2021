import { useEffect, useRef } from 'react';

const useDebounce = (handler, dependency = [], time = 300) => {
  const $timer = useRef(null);

  useEffect(() => {
    if ($timer.current != null) {
      clearTimeout($timer.current);
    }

    $timer.current = setTimeout(() => {
      handler();
    }, time);
  }, dependency);

  return () => {
    clearTimeout($timer.current);
  };
};

export default useDebounce;
