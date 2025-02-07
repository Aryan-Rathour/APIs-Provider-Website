import { useMutation } from "@tanstack/react-query";

const usePostRequest = (endpoint) => {
  return useMutation(async (data) => {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Something went wrong");
    }

    return response.json();
  });
};

export default usePostRequest;
