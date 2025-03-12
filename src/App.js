import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Services from './components/Services/Services';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import './index.css';
import './App.css';


const App = () => {
  return (

    <div className="bg-gray-950 bg-center bg-cover overflow-hidden text-yellow-50 ">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      <div className='h-[100px]'></div>
    </div>
  )
}

export default App
