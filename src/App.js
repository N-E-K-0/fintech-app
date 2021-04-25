import Container from '@material-ui/core/Container';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
