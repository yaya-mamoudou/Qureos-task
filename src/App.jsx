import './App.css';
import {Home, Task1,Task2,Task3} from './components';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task1" element={<Task2 />} />
        <Route path="/task1" element={<Task3 />} />
    </Routes>
    
  );
}

export default App;
