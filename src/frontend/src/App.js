import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import { TeamPage } from './pages/TeamPage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/teams/:teamName" element= {<TeamPage />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
