import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/app.scss';
import { Header } from './components/Header'
import { Home } from "./components/Home/Home";
import { Camisetas } from "./components/Camisetas/Camisetas";
import { Calcas } from "./components/Calcas/Calcas";
import { Sapatos } from "./components/Sapatos/Sapatos";
import { Contato } from "./components/Contato/Contato";
import { Footer } from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/camisetas",
    element: <Camisetas />
  },
  {
    path: "/calcas",
    element: <Calcas />
  },
  {
    path: "/calcados",
    element: <Sapatos />
  },
  {
    path: "/contato",
    element: <Contato />
  },
])

function App() {

  return (
    <div className="main-content">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
    
  )
}

export default App
