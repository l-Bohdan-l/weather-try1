/* eslint-disable no-unused-vars */
import './App.css';
import { Searchbar } from './components/Searchbar/Searchbar';
import {CityList} from './components/CityList/CityList';

function App() {
  return (
    <div className="App">
      <header>
        <div>          
          <Searchbar/>
        </div>
      </header>
      <div>
        <div>
          <CityList/>
        </div>
      </div>
    </div>
  );
}

export default App;
