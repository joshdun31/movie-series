import {  Component} from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import WatchOnline from './components/WatchOnline';
import MovieSeries from './components/MovieSeries';
import Search from './components/Search';

class App extends Component{

  render(){
    const bodyStyle={
      backgroundColor:'#000',
      minHeight:'100vh'
    }
    return(
      <div style={bodyStyle}>
        <Router>
          <Switch>
            <Route exact component={Home} path='/'/>
            <Route exact component={Search} path='/search/:title'/>
            <Route exact component={WatchOnline} path='/watchonline/:movie/:id' />
            <Route exact component={MovieSeries} path={'/:type/:id'} />
          </Switch>
        </Router>
      </div>
      
    ) 
  }
}

export default App;
