import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './component/Chat';
import Landing from './component/Landing'
 
class App extends Component{

    render(){
    return ( 
        <div>
            <Chat/>
            <Landing/>
        </div >
    );
    }
}

export default App;