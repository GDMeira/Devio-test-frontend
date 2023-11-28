import { UserProvider } from './contexts/UserContext';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <UserProvider>
      <HomePage/>
    </UserProvider>
  )
}

export default App
