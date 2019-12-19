import React from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import Greet from './Greet'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			movie: [],
			sayHay: "Movie"
		}
	}
	componentDidMount() {
		Axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=e1c2b2c630d19b771a1a27916a56d7e2&language=th-US&page=1')
			.then(res => {
				const dataArray = []
				res.data.results.forEach(el => {
					el.posterUrl = "https://image.tmdb.org/t/p/w185" + el.poster_path
					dataArray.push(el)
				});
				this.setState({ movie: dataArray })
			})
	}
	render() {
		return(
			<div className="App">
				<header className="App-header">
					<div className="gridContent">
						<Greet data={this.state.sayHay} movie={this.state.movie}/>
					</div>
				</header>
			</div>
		)
	}
}

export default App;
