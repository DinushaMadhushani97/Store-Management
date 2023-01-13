import React, {Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import CreateStore from'./components/CreateStore';
import EditStore from'./components/EditStore';
import Home from'./components/Home';
import NavBar from'./components/NavBar';
import StoreDetails from'./components/StoreDetails';
// import image5 from './image5.jpg'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
       <div className="container">
         <NavBar/>
         <Route path="/" exact component={Home}></Route>
         <Route path="/add" component={CreateStore}></Route>
         <Route path="/edit/:id" component={EditStore}></Route>
         <Route path="/store/:id" component={StoreDetails}></Route>

         </div>
         </div>
         </BrowserRouter>
    

    
    )
  }
}


