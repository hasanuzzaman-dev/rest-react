import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Col, Container, Row } from 'reactstrap';
import './App.css';
import AddCourse from './components/AddCourse';
import Allcourse from './components/AllCourse';
import Header from './components/Header';
import Home from './components/Home';
import Menus from './components/Menus';
import UpdateCourse from "./components/UpdateCourse";

function App() {

  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <Router>
        <ToastContainer />

        <Container>
          <Header name="Welcome to Course Application" />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/view-courses" element={<Allcourse />} />
                <Route path="/update-course/:id" element={<UpdateCourse />} />
              </Routes>

            </Col>

          </Row>
        </Container>
      </Router>


    </div>
  );
}

export default App;

