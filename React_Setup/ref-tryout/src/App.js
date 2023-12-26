import logo from './logo.svg';
import './App.css';
import CompA from './components/UsingState/CompA';
import RefCompA from './components/UsingRef/RefCompA';

function App() {
  return (
    <div className="App">
      <h1>Ref Tryout</h1>
      <CompA />
      <RefCompA />
    </div>
  );
}

export default App;
