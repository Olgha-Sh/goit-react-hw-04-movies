import React, { Component } from "react";
import * as filmsApi from "../../services/films-api";
import castMapper from "../../helpers/castMapper";
import CastList from "../CastList/CastList";
import PropTypes from "prop-types";

export default class Cast extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
  };

  state = {
    cast: []
  };

  componentDidMount() {
    const { id } = this.props;

    filmsApi
      .getFilmCast(id)
      .then(({ cast }) => this.setState({ cast: castMapper(cast) }))
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { cast } = this.state;
    const { onClick } = this.props;
    return <CastList cast={cast} onClick={onClick} />;
  }
}
