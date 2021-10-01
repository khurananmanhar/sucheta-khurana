import './App.css';
import Title from '../Title/Title';
import Navbar from '../Nav/Nav';
import Sub from '../Subheading/Sub';
import Arise from "../Arise/Arise"
import Dhyana from '../Dhyana/Dhyana';
import Maneta from '../Maneta/Maneta';
import Closing from '../Closing/Closing';
function App() {
  return (
    <div>
        <Title/>
        <Navbar/>
        <Sub/>
        <Arise/>
        <Dhyana/>
        <Maneta/>
        <Closing/>
    </div>
  );
}

export default App;
