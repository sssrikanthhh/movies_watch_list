import useMovieStore from '../app/movieStore';

const MoviesList = () => {
	const { movies, removeMovie, watchedMovie } = useMovieStore(state => ({
		movies: state.movies,
		removeMovie: state.removeMovie,
		watchedMovie: state.watchedMovie
	}));
	return (
		<>
			<ul>
				{movies.map(movie => (
					<li
						key={movie.id}
						className='movie'
						style={{
							backgroundColor: movie.watched ? 'green' : 'lightcoral'
						}}
					>
						<span className='movie-col-1'>
							<input
								checked={movie.watched}
								type='checkbox'
								onChange={e => watchedMovie(movie.id)}
							/>
						</span>
						<span
							style={{
								textDecoration: movie.watched ? 'line-through' : 'none'
							}}
						>
							{movie?.title}
						</span>
						<button
							onClick={() => removeMovie(movie.id)}
							className='delete-btn'
						>
							Watched
						</button>
					</li>
				))}
			</ul>
		</>
	);
};

export default MoviesList;
