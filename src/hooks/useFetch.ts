import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosRequestConfig, CancelTokenSource } from 'axios';

export const useFetch = <T,>(fetchFunction: (config: AxiosRequestConfig) => Promise<T>, timeout: number = 5000) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async (source: CancelTokenSource) => {
    const timer = setTimeout(() => source.cancel('Request timed out'), timeout);

    try {
      setLoading(true);
      const result = await fetchFunction({ cancelToken: source.token });
      setData(result);
    } catch (err) {
      if (axios.isCancel(err)) {
        setError(new Error('Request timed out'));
      } else {
        setError(err as Error);
      }
    } finally {
      clearTimeout(timer);
      setLoading(false);
    }
  }, [fetchFunction, timeout]);

  useEffect(() => {
    const source = axios.CancelToken.source();

    fetchData(source);

    return () => {
      source.cancel('Component unmounted');
    };
  }, [fetchData]);

  return { data, loading, error };
};
