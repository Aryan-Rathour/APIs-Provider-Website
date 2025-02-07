// hooks/useFetchData.js
import { useQuery } from '@tanstack/react-query';

const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const useFetchData = (url) => {
  return useQuery({
    queryKey: [url], // The new way to pass query keys
    queryFn: () => fetchData(url),
    // Optionally, you can add some configurations for the query here
    refetchOnWindowFocus: false, // Disable refetch on window focus
    retry: 1, // Retry the request once if it fails
    staleTime: 60000, // Data will be considered fresh for 1 minute
  });
};

export default useFetchData;
