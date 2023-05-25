import './App.css';
import Container from '@mui/material/Container';
import FormSignUp from './Components/FormSignUp';
import Typography from '@mui/material/Typography';
function App() {

    const handleSubmit = (valores) => {
      console.log('Apps',valores)
    }

  return (
    <div>
      <Container component='section' maxWidth = 'md'>
        <Typography variant='h2' align = 'center' component= 'h1'>Formulario Registro</Typography>
        <FormSignUp handleSubmit = {handleSubmit}/>
        
      </Container>
      
    </div>
  );
}

export default App;
