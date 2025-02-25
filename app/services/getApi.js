import { useQuery } from '@tanstack/react-query';

const BASE_URL = 'http://localhost:5000';

const fetchData = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const useFetchData = (endpoint) => {
  return useQuery({
    queryKey: [endpoint], // React Query key
    queryFn: () => fetchData(endpoint),
    refetchOnWindowFocus: false, // Prevent refetching when window regains focus
    retry: 1, // Retry request once on failure
    staleTime: 60000, // Cache data for 1 minute
  });
};

export default useFetchData;
