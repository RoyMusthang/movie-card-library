import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const cards = movies.map((mov) => <MovieCard key={ mov.title } movie={ mov } />);

    return (
      <main>
        { cards }
      </main>
    );
  }
}

export default MovieList;
