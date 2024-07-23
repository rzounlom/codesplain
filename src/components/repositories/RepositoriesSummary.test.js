import { render, screen } from "@testing-library/react";

import RepositoriesSummary from "./RepositoriesSummary";

it("displays the primary language of the repository", () => {
  const repository = {
    language: "JavaScript",
    stargazers_count: 5,
    open_issues: 1,
    forks: 30,
  };

  render(<RepositoriesSummary repository={repository} />);

  //find element

  for (const key in repository) {
    const value = repository[key];
    const element = screen.getByText(new RegExp(value, "i"));
    expect(element).toBeInTheDocument();
  }
});
