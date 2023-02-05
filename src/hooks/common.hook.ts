import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const useNotFoundRedirect = (delay: number) => {
  const router = useRouter();

  const [second, setSecond] = useState<number>(delay);

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, delay * 1000);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecond(second - 1);
    }, 1000);

    if (second === 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [second]);

  return { second };
};
