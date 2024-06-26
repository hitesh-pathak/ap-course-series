import { Link } from 'react-router-dom';
import ContactPhone from '../icons/ContactPhone';

export default function ContactButton() {
  return (
    <Link
      to={'/'}
      className="hidden text-white hover:cursor-pointer ml-4.5 lg:block"
    >
      <ContactPhone className="w-5 h-5 fill-current" />
    </Link>
  );
}
