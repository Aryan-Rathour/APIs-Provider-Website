import { useMutation } from "@tanstack/react-query";

const usePutMutation = (url) => {
  // Ensure the mutation function is defined correctly
  return useMutation({
    mutationFn: async (updatedData) => {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Failed to update data");
      }

      return response.json();
    },
  });
};

export default usePutMutation;
