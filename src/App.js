import GetProjects from './Components/GetProjects';
import ViewReports from './Components/ViewReports';
import Report from './Components/Report';
import DetailedReports from './Components/DetailedReports';
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
      <Link class="navbar-brand" to="/ViewReports">Se Rapporteringar</Link>
      <Link class="navbar-brand" to="/Report">Rapportera tid</Link>
      <Link class="navbar-brand" to="/DetailedReports">Se Rapport Detaljer</Link>
      <div>
        <ul class="navbar-nav">
        </ul>
      </div>
      </nav>
    <Routes>

    <Route path='/GetProjects' element={<GetProjects />} />
    <Route path='/ViewReports' element={<ViewReports />} />
    <Route path='/Report' element={<Report />} />
    <Route path='/DetailedReports' element={<DetailedReports />} />
    
    </Routes>
    </Router>
    
  )
}

export default App;
