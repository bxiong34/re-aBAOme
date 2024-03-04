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
    <a href="https://github.com/bxiong34" target="_blank" rel="noopener noreferrer" className="icon-link">
      <FaGithub className="icon" />
    </a>
    <a href="mailto:baoxiong814@gmail.com" className="icon-link">
      <FaPaperPlane className='icon'/>
    </a>
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