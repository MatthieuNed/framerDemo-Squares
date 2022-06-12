import './App.css';
import Box1 from './components/Box1/Box1'
import Box2 from './components/Box2/Box2'
import Box3 from './components/Box3/Box3'
import Box4 from './components/Box4/Box4'
import Box5 from './components/Box5/Box5'
import Box6 from './components/Box6/Box6'

function App() {
  return (
    <div className="App">
      <p>rotation</p>
      <br />
     < Box1 />
     <p>hover and tap</p>
     <br />
     < Box2 />
     <p>transitions</p>
     <br />
     < Box3 />
     <p>delay and animation within a blox</p>
     <br />
     < Box4 />
     <p>Zoom in and out / Change shape</p>
     <br />
     < Box5 />
     < Box6 />
    </div>
  );
}

export default App;
