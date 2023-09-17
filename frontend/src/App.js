
import './App.css';
import Home from './components/Home';
import NavBar from './components/layouts/NavBar';
import {HelmetProvider} from "react-helmet-async";
function App() {
  return (
    <div className='App'>
<HelmetProvider/>


<NavBar/>

<Home/>
      </div>
 
  );
}

export default App;
