import { NavLink } from 'react-router-dom';
import Navigation from './UI/Navigation';

export default function Header() {
  return ( 
    <Navigation
      links={[
        { title: 'About Me', path: '/' },
        { title: 'Portfolio', path: '/portfolio' },
        { title: 'Contact', path: '/contact' },
        { title: 'Resume', path: '/resume' },
      ]}
    />
  );
}