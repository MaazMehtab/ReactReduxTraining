export const url = "https://reqres.in/api/users?page=1&per_page=100";

function service() {
  const getAllUsers = () => {
    return fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => data.data)
      .catch((e) => e);
  };

  return {
    getAllUsers,
  };
}

const userService = service();

export default userService;
