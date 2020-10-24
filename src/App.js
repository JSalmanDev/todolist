import './App.css';
import NavBar from './components/NavBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Todos from './components/Todos';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/todos" />
        </Route>
        <Route exact path={"/todos"} component={Todos} />
        <Route exact path={"/contact"} component={Contact} />  
      </Switch>      
    </div>
  );
}

export default App;
