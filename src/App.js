import logo from './logo.svg';
import './App.css';
import Palette from './Palette';
import seedColors from './seedColors';

function App() {
  return (
    <div className="App">
     <Palette {...seedColors[1]}/>
    </div>
  );
}

export default App;
