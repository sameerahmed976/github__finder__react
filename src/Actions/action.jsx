import axios from "axios";

const github = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_URL,
  headers: {
    Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});

const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await github.get(`/search/users?${params}`);

  return response.data.items;

  //   try {
  //     const response = await fetch(
  //       `${import.meta.env.VITE_GITHUB_URL}/search/users?${params}`,
  //       {
  //         headers: {
  //           Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
  //         },
  //       }
  //     );

  //     const { items } = await response.json();

  //     return items;

  //     // console.log(
  //     //   `* ~ file: GithubContext.jsx:33 ~ searchUsers ~ items`,
  //     //   items
  //     // );
  //     // console.log(`* ~ file: UserList.jsx:18 ~ fetchData ~ data`, data);
  //   } catch (error) {
  //     console.log(error);
  //   }
};

// const getUser = async (login) => {
//   //   dispatch({ type: "LOADING" });
//   try {
//     const response = await fetch(
//       `${import.meta.env.VITE_GITHUB_URL}/users/${login}`,
//       {
//         headers: {
//           Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
//         },
//       }
//     );

//     if (response.status === 404) {
//       window.location = "/not found";
//     } else {
//       const data = await response.json();

//       return data;

//       // console.log(
//       //   `* ~ file: GithubContext.jsx:33 ~ searchUsers ~ items`,
//       //   items
//       // );
//       // console.log(`* ~ file: UserList.jsx:18 ~ fetchData ~ data`, data);
//       //   dispatch({ type: "USER", payload: data });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const getUsersRepos = async (login) => {
//   const params = new URLSearchParams({
//     sort: "created",
//     per_page: 10,
//   });

//   //   dispatch({ type: "LOADING" });
//   try {
//     const response = await fetch(
//       `${import.meta.env.VITE_GITHUB_URL}/users/${login}/repos?${params}`,
//       {
//         headers: {
//           Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
//         },
//       }
//     );

//     const data = await response.json();
//     // console.log(
//     //   `* ~ file: GithubContext.jsx:33 ~ searchUsers ~ items`,
//     //   items
//     // );
//     // console.log(`* ~ file: UserList.jsx:18 ~ fetchData ~ data`, data);
//     return data;

//     // dispatch({ type: "REPOS", payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };

const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return {
    user: user.data,
    repos: repos.data,
  };
};

export { searchUsers, getUserAndRepos };
