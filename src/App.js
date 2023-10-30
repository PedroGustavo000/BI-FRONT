import './App.css';
//import ExternalDashboards from './components/contentDashs/ExternalDashboards';
import NavBar from './components/navBar/NavBar';
import ApplicationsDashboards from './components/contentDashs/ApplicationsDashboards';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ApplicationsDashboards/>
    </div>
  );
}

export default App;
