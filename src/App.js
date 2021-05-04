import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <header>
        <Header/>
        <LandingPage/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
