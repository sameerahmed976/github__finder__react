import React, { useEffect } from "react";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { getUserAndRepos } from "../Actions/action";
import { useAppContext } from "../Context/GithubContext";
import ReposList from "./ReposList";

const UserSingle = () => {
  const { user, isLoading, repos, dispatch } = useAppContext();
  const { login: id } = useParams();

  useEffect(() => {
    dispatch({ type: "LOADING" });
    const getData = async () => {
      const data = await getUserAndRepos(id);
      dispatch({ type: "USER_AND_REPOS", payload: data });
    };

    getData();
  }, [dispatch, id]);

  // console.log(user);

  if (isLoading) {
    return (
      <section className="main__loading">
        <h2 className="loading">Loading...</h2>
      </section>
    );
  }

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  console.log(`* ~ file: UserSingle.jsx:48 ~ UserSingle ~ user`, user);

  return (
    <>
      <main className="single__user">
        <Link to="/" className="btn btn--back" role="button">
          Back To Search
        </Link>

        <section className="single__user__container">
          <article className="single__image__container">
            <img src={avatar_url} alt="avatar_url" className="single__avatar" />
            <h2 className="single__name">{name}</h2>
            <h2 className="single__login">{login}</h2>
          </article>

          <article className="single__content">
            <h2 className="single__title">{name}</h2>
            <p className="single__type">{type}</p>

            {hireable && (
              <>
                <h3 className="single__hireable">Hireable</h3>
              </>
            )}
            <p className="single__bio">{bio}</p>

            <a
              href={html_url}
              target="_blank"
              rel="noopener noreferrer"
              className=" btn single__url"
            >
              Visit Github Profile
            </a>
          </article>
        </section>

        <section className="single__stats">
          <article className="single__links">
            <h3 className="single__location">
              {location && (
                <>
                  Location :
                  <span className="single__location__name">{location}</span>
                </>
              )}
            </h3>
            <h3 className="single__blog">
              {blog && (
                <>
                  Website :
                  <span className="single__blog__name">
                    <a
                      href={blog}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="single__web"
                    >
                      {blog}
                    </a>
                  </span>
                </>
              )}
            </h3>
            <h3 className="single__twitter__username">
              {twitter_username && (
                <>
                  twitter username :
                  <span className="single__twitter__username__name">
                    <a
                      href={twitter_username}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="single__web"
                    >
                      {twitter_username}
                    </a>
                  </span>
                </>
              )}
            </h3>
          </article>

          <article className="single__stats__number">
            <h4 className="single__followers__icon">
              <FaUsers className="single__shape" />
              <span>Followers : </span>
              {followers}
            </h4>
            <h4 className="single__followers__icon">
              <FaUserFriends className="single__shape" />
              <span>Following : </span>
              {following}
            </h4>
            <h4 className="single__followers__icon">
              <FaCodepen className="single__shape" />
              <span>Public repos : </span>
              {public_repos}
            </h4>
            <h4 className="single__followers__icon">
              <FaStore className="single__shape" />
              <span>Public gists : </span>
              {public_gists}
            </h4>
          </article>
        </section>
        <ReposList repos={repos} />
      </main>
    </>
  );
};

export default UserSingle;
