import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './Components/HeaderComponent';
import NavigationComponent from './Components/NavigationComponent';
import FooterComponent from './Components/FooterComponent';
import PrincipalComponent from './Components/Views/PrincipalComponen';
import LoginComponent from './Components/LoginComponent';

function App() {
  return (
    <div>
      <Router>
        <NavigationComponent />
        <HeaderComponent title="Bienvenidos" user="Cristian" />
        <Switch>
          <Route path="/" exact > <LoginComponent /></Route>
          <Route path="/principal" exact > <PrincipalComponent /></Route>

        </Switch>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
