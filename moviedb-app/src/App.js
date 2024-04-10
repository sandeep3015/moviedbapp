import {Route} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom';
import HomePage from './components/HomePage'
import TopRatedPage from './components/TopRatedPage'
import UpComingPage from './components/UpComingPage'

const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/toprated' component={TopRatedPage}/>
    <Route exact path='/upcoming' component={UpComingPage}/>
  </BrowserRouter>

)

export default App