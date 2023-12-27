import logo from './logo.svg';
import './App.css';
import CompA from './components/CompA';
import FormikForm from './components/FormikForm';
import FormikForm2 from './components/FormikForm2';

function App() {
  return (
    <div className="App">
      <h1>Performing API Integration using Axios</h1>
      {/* <CompA /> */}

      <h2>Form using Formik (useFormik)</h2>
      <FormikForm />

      <h2>Form using Formik (Formik Tag)</h2>
      <FormikForm2 />
    </div>
  );
}

export default App;
