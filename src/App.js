import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div className='content'>
        <Navbar/>
      </div>
    </div>
  );
}

export default App;
