import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import TopBanner from './components/TopBanner/TopBanner';
import { Suspense, lazy } from 'react';
import './App.css';

const Footer = lazy(() => import('./components/Footer/Footer'));
export default function App() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Navbar />
      <TopBanner />
      <Outlet />
      <Suspense fallback={<></>}>
        <Footer />
      </Suspense>
    </div>
  );
}
