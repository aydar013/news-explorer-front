import Api from "./NewsApi";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://www.newsexplorer.lozan.com"
    : "http://localhost:3001";

const MainApi = {
  checkResponse: async (res) => {
    const response = await fetch(res);
    if (response.ok) {
      return await response.json();
    }
    const error = new Error(
      `Error ${response.status}: ${await response.text()}`
    );
    throw error;
  },

  signIn: async ({ email, password }) => {
    const url = `${baseUrl}/signin`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };
    return await Api.request(url, options);
  },

  register: async ({ name, email, password }) => {
    const url = `${baseUrl}/signup`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    };
    return await Api.request(url, options);
  },

  getUser: async (token) => {
    const url = `${baseUrl}/users/me`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    return await Api.request(url, options);
  },

  saveArticle: async (
    { keyword, title, text, date, source, link, image },
    token
  ) => {
    const url = `${baseUrl}/articles`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
      }),
    };
    return await Api.request(url, options);
  },

  getArticles: async (token) => {
    const url = `${baseUrl}/articles`;
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    return await Api.request(url, options);
  },

  deleteArticle: async (artucleId, token) => {
    const url = `${baseUrl}/articles/${artucleId}`;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };
    return await Api.request(url, options);
  },
};

export default MainApi;
