import {Component} from 'react'
import Header from '../Header'

import './index.css'

const imageUrl = "https://image.tmdb.org/t/p/w500"

class UpComingPage extends Component {

    state = {
        upComingMoviesList: [],
    }

    componentDidMount = () => (
        this.getTopRatedMoviesList()
    )

    getTopRatedMoviesList = async () => {
        const url = "https://api.themoviedb.org/3/movie/upcoming?api_key=176af444b0e56da349afe8c8e510a455&language=en-US&page=1"
        const options = {
            method: 'GET',
        }
        const response = await fetch(url, options)
        const data = await response.json()
        if (response.ok === true) {
            const updatedData = data.results.map(eachMovie => ({
                movieImagePath: eachMovie.poster_path,
                movieTitle: eachMovie.title,
                movieRating: eachMovie.vote_average,
            }))
            this.setState({
                upComingMoviesList: updatedData,
            })
        }
    }

    renderUpcomingMovieList = () => {
        const {upComingMoviesList} = this.state
        const {movieImagePath, movieTitle, movieRating,} = upComingMoviesList
        const movieUrl = imageUrl + movieImagePath
        return(
            <ul className='upcoming-movies-list'>
                <li className='upcoming-movie-details-container'>
                    <img src={movieUrl} alt={movieTitle} className="movie-poster" />
                    <div className="title-rating-container">
                        <p>{movieTitle}</p>
                        <p>{movieRating}</p>
                    </div>
                </li>
            </ul>
        )
    }
 
    render(){
        return(
            <>
                <Header/>
                <div className='upcoming-page-container'>
                    {this.renderUpcomingMovieList()}
                </div>
            </>
        )
    }
}

export default UpComingPage