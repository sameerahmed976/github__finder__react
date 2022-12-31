import React from "react";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

const ReposList = ({ repos }) => {
  console.log(`* ~ file: ReposList.jsx:4 ~ ReposList ~ repos`, repos);

  return (
    <>
      <section className="repos">
        <h2 className="repos">Latest Repo</h2>
      </section>
      {repos.map((item) => {
        const {
          name,
          description,
          html_url,
          forks,
          open_issues,
          watchers_count,
          stargazers_count,
        } = item;
        return (
          <section key={item.id}>
            <a
              href={html_url}
              target="_blank"
              className="repos__link"
              rel="noopener noreferrer"
            >
              <FaLink className="repos__icon" />
              {name}
            </a>
            <p className="repos__description">{description}</p>
            <p className="repos__stargazers">
              <FaStar className="repos__icon" /> {stargazers_count}
            </p>
            <p className="repos__watchers">
              <FaEye className="repos__icon" /> {watchers_count}
            </p>
            <p className="repos__issues">
              <FaInfo className="repos__icon" /> {open_issues}
            </p>
            <p className="repos__forks">
              <FaUtensils className="repos__icon" /> {forks}
            </p>
          </section>
        );
      })}
    </>
  );
};

export default ReposList;
