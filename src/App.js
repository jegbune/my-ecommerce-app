// import logo from './logo.svg';
import './App.css';
import Nav from './Component/ecommerceComponent/Nav';
// import Menu from './Component/Menu';
// import Form from './Component/Form'
// import Crud from './Component/Crud';
// import {Routes, Route} from 'react-router-dom'
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Todos from './Component/Todos';
// import Styling from './Component/Styling.js'
// import State from './Component/State'
// import Timer from './Component/Timer';
// import UseEffect from './Component/useEffect';
// import Counter from './Component/Counter';
// import UseContext1 from './Component/UseContext1';
import { Auth0Provider } from '@auth0/auth0-react';




function App() {
  return (
    // <Routes>
      // <Route>
      <Auth0Provider
      domain="dev-8r17bfwspua1zyq2.us.auth0.com"
      clientId="bu2wBb1Kpvm6VjzcRee1Rjduey7Iunbz"
      authorizationParams={{
      redirect_uri: window.location.origin
    }}>
      <Nav />
      </Auth0Provider>
      // </Route>
    // </Routes>
    // <UseContext1 />
    // <div className='app'>
    //   {/* <Styling/> */}
    //   {/* <State /> */}
    //   {/* <Timer /> */}
    //   {/* <UseEffect /> */}
    //   {/* <Counter /> */}
    // </div> 

  //  <Todos /> 
    // <Routes>
    //   <Route path='/' element = {<Home />} />
    //   <Route path='/About' element = {<About />} />
    //   <Route path='/Contact' element = {<Contact />} />
    // </Routes>        

    // <div className="App">
    //   <Crud /> 
    //   <Menu /> 
      // <Form /> 
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
