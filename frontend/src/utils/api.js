class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  async getInitialCards(token) {
    try {
      const response = await fetch(`${this.baseUrl}/cards`, {
        headers: {
          ...this.headers,
          authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(`Error:${response.status}`);
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  async getUserInfo(token) {
    try {
      const response = await fetch(`${this.baseUrl}/users/me`, {
        headers: {
          ...this.headers,
          authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(`Error:${response.status}`);
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async editProfile(body, token) {
    const { name, about } = body;
    try {
      const response = await fetch(`${this.baseUrl}/users/me`, {
        method: "PATCH",
        headers: {
          ...this.headers,
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: name,
          about: about,
        }),
      });
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(`Error ${response.status}`);
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async editAvatar(link, token) {
    try {
      const response = await fetch(`${this.baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: {
          ...this.headers,
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          avatar: link,
        }),
      });
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(`Error ${response.status}`);
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  async changeLikeCardStatus(cardId, isLiked, token) {
    try {
      let response;
      if (isLiked) {
        response = await fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
          method: "DELETE",
          headers: {
            ...this.headers,
            authorization: `Bearer ${token}`,
          },
        });
      } else {
        response = await fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
          method: "PUT",
          headers: {
            ...this.headers,
            authorization: `Bearer ${token}`,
          },
        });
      }
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(`Error ${response.status}`);
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  async postCard(body, token) {
    const { title, link } = body;
    try {
      const response = await fetch(`${this.baseUrl}/cards`, {
        method: "POST",
        headers: {
          ...this.headers,
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: title,
          link: link,
        }),
      });
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(`Error ${response.status}`);
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  async deleteCard(cardId, onDeleteCard, token) {
    try {
      const response = await fetch(`${this.baseUrl}/cards/${cardId}`, {
        method: "DELETE",
        headers: {
          ...this.headers,
          authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        onDeleteCard();
      } else {
        return Promise.reject(`Error: ${response.status}`);
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

const api = new Api({
  baseUrl: "http://localhost:5000",
  headers: {
    "content-type": "application/json",
  },
});

export default api;
