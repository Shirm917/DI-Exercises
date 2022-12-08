import './App.css';
import { faGem,faHandPointRight, faBoltLightning, faBatteryFull } from '@fortawesome/free-solid-svg-icons';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Card title="Points" amount="3,000" icon={faHandPointRight} />
      <Card title="Lightnings" amount="6,540" icon={faBoltLightning}/>
      <Card title="Power" amount="400,000" icon={faBatteryFull}/>
      <Card title="Diamonds" amount="400" icon={faGem}/>
    </div>
  );
}

export default App;
