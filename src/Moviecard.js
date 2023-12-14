import logo from './logo.svg';
import './App.css';
// import PropsType from 'props-type';
import movies from './Moviecarddata';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Filter from './FilterTitleRate';
// import Login from './Login';
// import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';





function Moviecard() {

    const Navigate = useNavigate();

    function Descriptionpage (){
        Navigate("./descriptionpage")
}

function Descriptionpage2(){
Navigate("./descriptionpage2")
}


  return (
    <div style={{display: "grid", gridTemplateColumns: "auto auto auto auto auto auto", justifyContent: 'center', gap: '20px'}}>      
      
          {movies.map((item, index) => (
            <Card style={{ width: '18rem' }}>
          {/* {index === 0 &&<Card.Img variant="top" src={item.poster} />} */}
          {<Card.Img variant="top" src={item.poster} />}
          <Card.Body>
    
            {/* {index === 0 &&<Card.Title>{item.title}</Card.Title>}
            {index === 0 &&<Card.Text>{item.title} </Card.Text>}
            {index === 0 &&<Card.Text>Rate: {item.rate} </Card.Text>} */}

            {<Card.Title>{item.title}</Card.Title>}
            {<Card.Text>{item.title} </Card.Text>}
            {<Card.Text>Rate: {item.rate} </Card.Text>}


    
            {/* this is the video card index ===1 */}
             {/* {index === 1 && <Filter />}  */}
            {/* {index === 0 &&<Button variant="primary">Go somewhere</Button>} */}
            {index === 1 &&<Button variant="primary" onClick={Descriptionpage}>more details</Button>}
            {index === 0 &&<Button variant="primary" onClick={Descriptionpage2}>more details</Button>}
    
    
          </Card.Body>
        </Card>
          ))}
    
    
    
        </div>
      );
    }
    
export default Moviecard;


// onClick={description}












{/* <Button variant="primary" onClick={() => { window.location.href = "./"; }}>More </Button> */}