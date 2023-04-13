import {useCallback, useEffect, useState} from 'react';


const APP_VERSION = 1;

const getKey = (key: string, initialValue: any) => {
  try {
    const item = global.localStorage?.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  } catch (error) {
    console.log(error);
    return initialValue;
  }
};


export function useLocalStorage<T>(key: string, initialValue: T, append: number = APP_VERSION): [T, (t: T) => any] {
  key                                 = key + ':' + append;
  const [storedValue, setStoredValue] = useState<T>(() => getKey(key, initialValue));

  useEffect(() => setStoredValue(getKey(key, initialValue)),
            // eslint-disable-next-line
            [key])

  const setValue = useCallback((value: ((...par: any) => any) | T) => {
    try {
      const valueToStore =
              typeof value === 'function'
              ? (value as (v: any) => any)(storedValue)
              : value;
      setStoredValue(valueToStore);

      const cache: any[] = [];

      const serialized
              =
              JSON.stringify(valueToStore, (key, value) => {
                if (typeof value === 'object' && value !== null) {
                  // Duplicate reference found, discard key
                  if (cache.includes(value)) return;

                  // Store value in our collection
                  cache.push(value);
                }
                return value;
              });

      global.localStorage?.setItem(key, serialized);
    } catch (error) {
      console.log(error);
    }
  }, [storedValue, key]);

  return [storedValue, setValue];
}
