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

function GetProjects(){
    
    let navigate = useNavigate();
    //const propertyUrl = process.env.REACT_APP_API_URL + `Properties`
    const projectsUrl = `https://localhost:7054/api/Projects`
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        if(projects.length === 0) {
            fetch(projectsUrl).then(res => res.json().then(data => setProjects(data)))
        }
    })

    function GoBack() {
        navigate.push(`/`);
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
              <TableCell align="right">GitHub</TableCell>
              <TableCell align="right">Deadline</TableCell>
              <TableCell align="right">Företag</TableCell>
              <TableCell align="right">Aktiv</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {projects.map( item => (
              <TableRow key={item.name}>
                <TableCell component="th" scope="row">
                  {item.projectName}
                </TableCell>
                <TableCell align="right">{item.gitHub}</TableCell>
                <TableCell align="right">{item.company}</TableCell>
                <TableCell align="right">{item.deadline}</TableCell>
                <TableCell align="right">{item.aktiv}</TableCell>
                {/* <TableCell align="right">
                    <ThemeProvider theme={theme}>
                    <ButtonGroup variant="contained" color="secondary" aria-label="contained secondary button group">
                        <Button onClick={()=>Change(item.propertyID)}>Ändra</Button>
                        <Button onClick={()=>Delete(item.propertyID)}>Ta bort</Button>
                        <Button onClick={()=>Interest(item.propertyID)}>Intresseanmälningar</Button>
                    </ButtonGroup>
                    </ThemeProvider>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
export default GetProjects;
