import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <nav>
        <h1>Car selector</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Create new car</Link>
      </nav>
      <Routes />
    </Router>
  );
}

export default App;
