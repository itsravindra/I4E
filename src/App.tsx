import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/Home";
import PageHeader from "./components/PageHeader";
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import './App.css';
import { get } from "./utils/service-facade";
import StudyInCanada from './components/StudyInCanada';
import EduAbacusResult from './components/EduAbacusResult';


AOS.init();
// async function test() {
//   const response = await get(
//     "http://localhost:8080/i4e/i4e/v1/country/list"
//   );
//   console.log(response);
// }
function App() {
  return (
    <div>
   <Router>
      <PageHeader></PageHeader>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/StudyInCanada' element={<StudyInCanada/>}/>
      <Route path='/EduAbacusResult' element={<EduAbacusResult/>}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
