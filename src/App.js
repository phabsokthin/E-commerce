import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import BodyItem from './components/BodyItem';
import Test from './components/Test';
import BodyBanner from './components/BodyBanner';
import CompanySlide from './components/CompanySlide';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation/>
      <BodyItem/>
      <BodyBanner/>
      <CompanySlide/>
      <Footer/>
    </>
  );
}

export default App;
