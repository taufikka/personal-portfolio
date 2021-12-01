import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Details from './Pages/Home/Main/Details/Details';
import Blogs from './Pages/Home/Main/Blogs/Blogs';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path='/details/:id'>
            <Details></Details>
          </Route>

          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>

        </Switch>

      </BrowserRouter>


      {/*  <Header></Header>
      <Banner></Banner>
      <Projects></Projects>
      <Contact></Contact> */}
    </div>
  );
}

export default App;
