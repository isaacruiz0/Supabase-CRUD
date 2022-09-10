import { 
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link
} from 'react-router-dom';

// pages
import Home from "./pages/Home"
import Create from "./pages/Create"
import Update from "./pages/Update"


function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>Supa Smoothies</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Create New Smoothie</Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/:id" element={<Update />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
