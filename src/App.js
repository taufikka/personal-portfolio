import './App.css';
import Header from './Pages/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Pages/Home/Main/Banner/Banner';
import Projects from './Pages/Home/Main/Projects/Projects';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Projects></Projects>
    </div>
  );
}

export default App;
