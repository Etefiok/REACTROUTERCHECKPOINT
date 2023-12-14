import logo from './logo.svg';
import './App.css';
// import PropsType from 'props-type';
import movies from './Moviecarddata';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FilterTitleRate from './FilterTitleRate';
// import Login from './Login';
import { Routes, Route } from 'react-router-dom';
import Moviecard from './Moviecard';
import Descriptionpage from './Descriptionpage';
import Descriptionpage2 from './Descriptionpage2';



function App() {


  return (
    <div style={{display: "grid", gridTemplateColumns: "auto auto auto auto auto auto", justifyContent: 'center', gap: '20px'}}>      
      <Routes>
        {/* <Route path='/' element = { <Login />}/> */}
        <Route path='/' element = { <Moviecard />}/>
        <Route path='/filtertitlerate' element = { <FilterTitleRate />}/>
        <Route path='/descriptionpage' element = { <Descriptionpage />}/>
        <Route path='/descriptionpage2' element = { <Descriptionpage2 />}/>
        
      </Routes>

    </div>
  );
}

export default App;
