import { useMutation } from "@tanstack/react-query";

const usePostRequest = (endpoint) => {
  const BASE_URL = "http://localhost:5000";
  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: async (data) => {
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });


      return response.json();
    }
  });

  return { mutate, isLoading, isError, error };
};

export default usePostRequest;
