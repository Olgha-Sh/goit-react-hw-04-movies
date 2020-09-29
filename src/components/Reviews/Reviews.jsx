import React, { Component } from "react";
import * as filmsApi from "../../services/films-api";
import reviewsMapper from "../../helpers/reviewsMapper";
import ReviewsList from "../ReviewsList/ReviewsList";
import PropTypes from "prop-types";

export default class Cast extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
  };

  state = {
    reviews: []
  };

  componentDidMount() {
    const { id } = this.props;
    filmsApi
      .getFilmReviews(id)
      .then(data => this.setState({ reviews: reviewsMapper(data.results) }))
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { reviews } = this.state;
    const { onClick } = this.props;
    return <ReviewsList reviews={reviews} onClick={onClick} />;
  }
}
