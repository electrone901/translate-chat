
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import './App.css';
import Landing from './component/Landing';
import Chat from './component/Chat';
import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';

 
class App extends React.Component{
    render(){
    return (<Router>
          <div className="App">
            <Navbar />
            <div>
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/chat" component={Chat} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
    );
    }
}
export default App;
