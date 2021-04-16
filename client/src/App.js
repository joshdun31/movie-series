import {  Component} from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Home';

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
            <Route component={Home} path='/' />
          </Switch>
        </Router>
      </div>
      
    ) 
  }
}

export default App;
