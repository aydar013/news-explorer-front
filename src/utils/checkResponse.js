export const checkResponse = {
  request: async (url, options = {}) => {
    const response = await fetch(url, options);
    if (response.ok) {
      return await response.json();
    }
    const error = new Error(
      `Error ${response.status}: ${await response.text()}`
    );
    throw error;
  },
};
