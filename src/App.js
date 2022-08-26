import ListGroup from './ListGroup/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import FuncListGroup from "./ListGroup/FuncListGroup";


function App() {
  return (
    <>
      <ListGroup>
        <p>one</p>
        <p>two</p>
      </ListGroup>
        <hr/>
      <FuncListGroup>
        <p>one</p>
        <p>two</p>
      </FuncListGroup>
    </>
  );
}

export default App;
