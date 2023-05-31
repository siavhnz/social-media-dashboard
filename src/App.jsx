import Dashboard from "./pages/admin/Dashboard"
import AppContextProvider from "./store/context/app-context"

function App() {

  return <AppContextProvider>
    <Dashboard />
  </AppContextProvider>

}

export default App
