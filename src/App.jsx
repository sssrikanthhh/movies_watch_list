import './App.css';
import MovieForm from './components/MovieForm';
import MoviesList from './components/MoviesList';

function App() {
	return (
		<div className='main-container'>
			<h1 style={{ fontSize: '2.rem', marginBottom: '2rem' }}>My Movies</h1>
			<MovieForm />
			<MoviesList />
		</div>
	);
}

export default App;
