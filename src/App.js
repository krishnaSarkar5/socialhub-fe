import './App.css';
import { useColorMode } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import AppRoute from './routes/AppRoute';

function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      {/* <div className="App">
        Hello
      </div>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button> */}
      <AppRoute/>
    </>


  );
}

export default App;
