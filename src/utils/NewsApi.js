const BASE_URL = "https://nomoreparties.co/news/v2";
const apiKey = "66627eef648b404d9562926e00e57f23";

const currentDate = new Date();
const currentDateString = currentDate.toLocaleDateString("sv-SE");
const weekPriorDateString = new Date(
  currentDate.getTime() - 7 * 24 * 60 * 60 * 1000
).toLocaleDateString("sv-SE");

const Api = {
  search: async ({ input }) => {
    const url = `${BASE_URL}/everything?q=${input}&from=${weekPriorDateString}&to=${currentDateString}&apiKey=${apiKey}&pageSize=100`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${apiKey}`,
      },
    };
    return await Api.request(url, options);
  },
};

export default Api;
