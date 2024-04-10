import {Component} from 'react'
import Header from '../Header'

import './index.css'

const imageUrl = "https://image.tmdb.org/t/p/w500"

class TopRatedPage extends Component {

    state = {
        topRatedMoviesList: [],
    }

    componentDidMount = () => (
        this.getTopRatedMoviesList()
    )

    getTopRatedMoviesList = async () => {
        const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=176af444b0e56da349afe8c8e510a455&language=en-US&page=1&sort_by=vote_average.desc"
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
                topRatedMoviesList: updatedData,
            })
        }
    }

    renderTopRatedMovieList = () => {
        const {topRatedMoviesList} = this.state
        const {movieImagePath, movieTitle, movieRating,} = topRatedMoviesList
        const movieUrl = imageUrl + movieImagePath
        return(
            <ul className='top-rated-movies-list'>
                <li className='top-rated-movie-details-container'>
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
                <div className='top-rated-page-container'>
                    {this.renderTopRatedMovieList()}
                </div>
            </>
        )
    }
}

export default TopRatedPage