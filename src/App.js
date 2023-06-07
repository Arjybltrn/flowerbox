import Nav from './components/Nav';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import './App.css';
import data from "./data"

function App(props) {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Card />
      <Footer />
      
    </div>
  );
}

export default App;
