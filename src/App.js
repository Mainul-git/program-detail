import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,ModalRoute
} from "react-router-dom";
import ProgramDirectory from './components/ProgramDirectory/ProgramDirectory';
import ProgramDetail from './components/ProgramDetail/ProgramDetail';
import MentorDialog from './components/MentorDialog/MentorDialog';

function App() {
  return (
  
    
    
    <Router>
      <Switch>
      <Route path="/home">
    <ProgramDirectory/>
     </Route>
     <Route path="/programDetail/:programId">
<ProgramDetail/>
     </Route>
     <Route exact path="/">
     <ProgramDirectory/>
     </Route>
      </Switch>
    
    </Router>
  );
}

export default App;
