import './App.css';
import CompA from './components/CompA';
import CompB from './components/CompB';
import CompC from './components/CompC';
import { Provider } from 'react-redux';
import myStore from './store/store';

function App() {

  
  return (
    <Provider store={myStore}>
      <div className="App">
        <h1>App Component</h1>
        <CompA />
      </div>
    </Provider>
  );
}

export default App;
