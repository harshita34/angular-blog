import { BrowserRouter,
         Routes,
         Route
         } from 'react-router-dom';



import Navbar from "./components/Navbar";
import HomePage from './components/HomePage';
import SearchPage from './components/Search/SearchPage'
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" style={{overflow:"hidden"}}>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/stockAvailability" element={<SearchPage />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
