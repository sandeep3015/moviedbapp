import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
    render(){
        return (
            <nav className="navbar-header">
                <h1 className='movie-heading'>MovieDb</h1>
                <div className='nav-items-search-container'>
              <ul className="home-jobs-container">
                  <li className='nav-items-list'>
                        <Link to="/popular">Popular</Link>
                  </li>
                  <li className='nav-items-list'>
                        <Link to="/toprated">Top-rated</Link>
                  </li>
                  <li className='nav-items-list'>
                    <Link to="/upcoming">Upcoming</Link>
                  </li>
              </ul>
              <div className='search-bar-container'>
                <input type="text" placeholder="search" className='search-input'/>
                <button className='search-button'>
                 <label className='search-label'>Search</label>
                </button>
              </div>
              </div>
            </nav>
          )
    }
}

export default Header