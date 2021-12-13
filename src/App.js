import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Home from './Pages/Home/Home';
import Sidebar from './Sidebar';
function App() {
  return (
    <div>
      <Header/>
      <div  className="App"> 
        <Sidebar/>
        <div className="content-wrapper"> 
            <Home/>
        </div>
      </div>
    </div>
  );
}

export default App;
