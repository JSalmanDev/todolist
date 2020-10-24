import './App.css';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
import Todos from './components/Todos';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path={"/todos"} component={Todos} />
        <Route exact path={"/"} component={About} />
        <Route exact path={"/contact"} component={Contact} />  
      </Switch>      
    </div>
  );
}

export default App;
