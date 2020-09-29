import React, { Component } from "react";
import * as filmsApi from "../../services/films-api";
import filmsMapper from "../../helpers/filmsMapper";
import FilmsList from "../../components/FilmsList/FilmsList";

export default class HomePage extends Component {
  state = {
    popularFilms: []
  };

  componentDidMount() {
    filmsApi
      .getPopularFilms()
      .then(({ data }) => {
        this.setState({ popularFilms: filmsMapper(data.results) });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { popularFilms } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        <FilmsList films={popularFilms} />
      </>
    );
  }
}
