import GetProjects from './Components/GetProjects';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  // const fetchDataFromApi = async () => {
  //   let result = await fetch("https://localhost:7054/api/Projects", 
      
  //   );

  //   let data = await result.json();
    
  //   console.log(data);

  // }
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link class="navbar-brand" to="/">Tidsrapportering</Link>
      <Link class="navbar-brand" to="/GetProjects">Se Projekt</Link>
      <div>
        <ul class="navbar-nav">
        </ul>
      </div>
      </nav>
    <Routes>

    <Route path='/GetProjects' element={<GetProjects />} />
    
    </Routes>
    </Router>
    
  )
}

export default App;
