
import './App.css';
import Textform from './components/Textform';
import Navbar from './components/Navbar';

function App(props) {
  return (
   <>
 
<Navbar heading = "TextAnalyzer"/>
<div className='container'>
<Textform heading = "Enter the text you want to"/>
</div>

</>
  );
}

export default App;
