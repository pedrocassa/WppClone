import Menu from './components/Menu/Menu'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import { UserProvider } from './context/userContext.js'

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Menu />
        <Routes />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
