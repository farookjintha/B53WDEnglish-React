import logo from './logo.svg';
import './App.css';
import CompA from './components/UsingState/CompA';
import CompB from './components/UsingReducer';
function App() {
  return (
    <div className="App">
      <CompA />
      <CompB />
    </div>
  );
}

export default App;
