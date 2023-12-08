import './App.css';
import lake from "./image/lake.JPG";
import GallaryFooter from './components/GallaryFooter';
import Content from './components/Content';
import Body from './components/Body';
function App() {
  return (
    <div>
     <Body></Body>

      <div>
        {
          <Content></Content>
        }
      </div>
      {/* adding footer component */}
      <GallaryFooter/> 
    </div>
  )
}

export default App;
