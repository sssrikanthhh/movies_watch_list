import { useState } from 'react';

import useMovieStore from '../app/movieStore';

const MovieForm = () => {
	const addMovie = useMovieStore(state => state.addMovie);
	const [movieTitle, setMovieTitle] = useState('');

	const handleMovieSubmit = () => {
		if (!movieTitle) alert('please add movie title to add movie!');
		addMovie({
			id: Math.floor(Math.random() * 100000),
			title: movieTitle
		});
		setMovieTitle('');
	};

	return (
		<div className='form-conatiner'>
			<input
				className='form-input'
				value={movieTitle || ''}
				onChange={e => setMovieTitle(e.target.value)}
			/>
			<button className='form-submit-btn' onClick={() => handleMovieSubmit()}>
				Add movie
			</button>
		</div>
	);
};

export default MovieForm;
