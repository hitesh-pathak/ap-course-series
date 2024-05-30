import { Link } from "react-router-dom";

function NavMenuItem() {
  return <div className="space-x-2"></div>;
}

export default function Navbar() {
  return (
    <div id="main-nav-bar" className="h-12 bg-brand-orange">
      <div className="mx-auto h-full max-w-screen-2xl select-none text-white">
        <div className="flex h-full justify-between">
          <div className="flex items-stretch p1-4 lg:p1-8">
            <Link to="/" className="shrink-0 self-center">
              <img
                className="mr-2 h-8 w-8 rounded-full"
                src="https://acharyaprashant.org/images/ic_favicon.png"
                alt="Acharya Prashant Logo"
              />
            </Link>
            <div className="hidden items-stretch justify-center font-medium md:flex"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
