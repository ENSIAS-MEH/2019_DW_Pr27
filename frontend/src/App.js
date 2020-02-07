import React ,{Component}from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Species from './Components/pages/species'
import Home from './Components/pages/Home'
import Details from './Components/pages/details'
import FirstPage from './Components/Layout/firstpage'
import GoogleMap from './GoogleMap'


class App extends Component{
    googleMapRef = React.createRef()

  render(){
      return(
          <div>
              <Navbar/>
                <Switch>
                    <Route path="/firstpage" exact component={FirstPage}/>
                    <Route path="/species" component={Species}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/details" component={Details}/>
                    <Route path="/googlemap" component={GoogleMap}/>
                </Switch>

          </div>
      )   
  }
}
export default App;
