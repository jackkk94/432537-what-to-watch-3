import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const Movie = {
  NAME: `Logan`,
  GENRE: `Action`,
  RELEASE_YEAR: 2017
};

const MOVIES = [`Avengers: Endgame`, `The Irishman`, `Mad Max: Fury Road`];

it(`Should render App component`, () => {
  const tree = renderer
    .create(
        <App
          name={Movie.NAME}
          genre={Movie.GENRE}
          releaseYear={Movie.RELEASE_YEAR}
          movies={MOVIES}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
