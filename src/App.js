import './App.css';
import Profil from './components/profile/ProfilePhoto';
import Name from './components/profile/FullName';
import Adress from './components/profile/Address';

function App() {
  return (
    <div className="App" style={{ display: "flex", justifyContent: "space-between"}} >
      <Profil />
      <Name />
      <Adress />
    </div>
  );
}

export default App;
