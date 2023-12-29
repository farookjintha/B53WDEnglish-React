import logo from './logo.svg';
import './App.css';
import CompA from './components/CompA';
import { Provider } from 'react-redux'
import myStore from './store/store';

function App() {
  return (
    <Provider store={myStore}>
      <div className="App">
        <h1>ReduxJS Toolkit Tryout</h1>
        <CompA />
      </div>
    </Provider>
  );
}

export default App;
