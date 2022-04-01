import react, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
//import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import { useParams } from 'react-router-dom';

function GetProjects(){
    
    const{id} = useParams(); 

    let navigate = useNavigate();
    //const propertyUrl = process.env.REACT_APP_API_URL + `Properties`
    const projectsUrl = `https://localhost:7054/api/Timereports`
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        if(projects.length === 0) {
            fetch(projectsUrl).then(res => res.json().then(data => setProjects(data)))
        }
    })

    function GoBack() {
        navigate(`/`);
    }

    function Report() {
        navigate(`/Report/`);
    }

    function DetailedReports() {
        navigate(`/DetailedReports/`);
    }

    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
      });

      const classes = useStyles();

      const theme = createTheme({
        palette: {
          primary: {
            // Purple and green play nicely together.
            main: purple[500],
          },
          secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
          },
        },
      });

return(
    <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Projekt</TableCell>
              <TableCell align="right">Utbildnings Timmar</TableCell>
              <TableCell align="right">Förberedelse Timmar</TableCell>
              <TableCell align="right">Andra Timmar</TableCell>
              <TableCell align="right">Efter Timmar</TableCell>
              <TableCell align="right">Kommentar</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {projects.map( item => (
              <TableRow key={item.name}>
                <TableCell component="th" scope="row">
                  {item.projectId}
                </TableCell>
                <TableCell align="right">{item.educationHours}</TableCell>
                <TableCell align="right">{item.preperationHours}</TableCell>
                <TableCell align="right">{item.other}</TableCell>
                <TableCell align="right">{item.afterHours}</TableCell>
                <TableCell align="right">{item.comment}</TableCell>
                <TableCell align="right">
                    <ThemeProvider theme={theme}>
                    <ButtonGroup variant="contained" color="secondary" aria-label="contained secondary button group">
                        <Button onClick={()=>DetailedReports()}>Ändra Rapportering</Button>
                        <Button onClick={()=>Report()}>Ta Bort</Button>
                        {/* <Button onClick={()=>Interest(item.propertyID)}>Intresseanmälningar</Button> */}
                    </ButtonGroup>
                    </ThemeProvider>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
export default GetProjects;
