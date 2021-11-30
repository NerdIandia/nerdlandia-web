const Auth = {
  login: async (event) => {
    event.preventDefault();
  },
  register: async (event) => {
    event.preventDefault();
  },
  logout: () => {
    document.cookie = "token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    location.href = '/';
  }
};
