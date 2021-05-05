import {  Component} from "react";
import {BrowserRouter as Router,Route,Switch, Redirect} from 'react-router-dom';
import Home from './components/Home';
import WatchOnline from './components/WatchOnline';
import MovieSeries from './components/MovieSeries';
import Search from './components/Search';
import Loading from './components/Loading';

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
            <Route exact component={Loading} path='/loading'/>
            <Route exact component={Search} path='/search/:title'/>
            <Route exact component={WatchOnline} path='/watchonline/:movie/:id' />
            <Route exact component={MovieSeries} path={'/:type/:id'} />
            <Route path="*" render={()=><Redirect to="/"/>} />
          </Switch>
        </Router>
      </div>
      
    ) 
  }
}

export default App;
