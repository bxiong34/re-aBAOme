import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { FaGithub, FaPaperPlane } from 'react-icons/fa';

const Header = () => (
  <header className="header">
    <div>
      <Navbar />
    </div>
  </header>
);

const Footer = () => (
  <footer className="footer">
    <p>© 2024 re-aBAOme</p>
    <FaGithub className='icon'/>
    <FaPaperPlane className='icon'/>
  </footer>
);

function App() {
  return (
    <>
     <Header/>
     <main className="mx-3">
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default App;