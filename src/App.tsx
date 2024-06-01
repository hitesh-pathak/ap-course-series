import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import './App.css';
import TopBanner from './components/TopBanner/TopBanner';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Navbar />
      <TopBanner />
      <Outlet />
      <Footer />
    </div>
  );
}
