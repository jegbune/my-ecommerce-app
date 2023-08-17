// import logo from './logo.svg';
import './App.css';
import Menu from './Component/Menu';
import Form from './Component/Form'
import Crud from './Component/Crud';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (

    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/About' element = {<About />} />
      <Route path='/Contact' element = {<Contact />} />
    </Routes>        

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
