import React, { Component } from "react";
import Footer from "../components/Footer";
import FilmList from "../components/FilmList";

export default class FilmBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // normally we'd pull this info from a restful api or our database and not have hard coded ids
      films: [
        {
          id: 1,
          name: "Spider-Man: Into the Spider-Verse",
          url: "https://www.imdb.com/title/tt4633694/?ref_=rlm",
        },
        {
          id: 2,
          name: "Life Itself",
          url: "https://www.imdb.com/title/tt5989218/?ref_=rlm",
        },
        {
          id: 3,
          name: "Mary Queen of Scots",
          url: "https://www.imdb.com/title/tt2328900/?ref_=rlm",
        },
        {
          id: 4,
          name: "The Lego Movie 2: The Second Part",
          url: "https://www.imdb.com/title/tt3513498/?ref_=rlm",
        },
        {
          id: 5,
          name: "Captain Marvel",
          url: "https://www.imdb.com/title/tt4154664/?ref_=rlm",
        },
      ],
    };
  }

  render() {
    return (
      <div className="film-box">
        <h1>Upcoming Film Releases for the UK</h1>
        <hr />
        <FilmList films={this.state.films} />
        <hr />
        <Footer />
      </div>
    );
  }
}
