// src/infrastructure/services/userService.js
export const postUser = async (data) => {
  try {
    const res = await fetch(import.meta.env.VITE_API_REGISTER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.status === 201) {
      return await res.json();
    } else {
      const errorData = await res.json();
      throw new Error(
        errorData.message || errorData.error || "Error desconocido."
      );
    }
  } catch (error) {
    throw error;
  }
};
