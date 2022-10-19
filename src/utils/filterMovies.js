const filterMovies = (
  movies,
  shortDuration,
  { movie: searchQuery, short: isShort }
) =>
  movies.filter((movie) => {
    const isShortMovie = movie.duration <= shortDuration;
    const movieName = movie.nameRU.toLowerCase();
    const search = searchQuery.toLowerCase();

    return isShort
      ? movieName.includes(search) && isShortMovie
      : movieName.includes(search);
  });

export default filterMovies;
