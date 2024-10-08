import { Link } from 'react-router-dom';
import Logo from '../../assets/images/shared/logo.svg';

const Header = () => {
  return (
    <header className='container'>
      <div className='logo'>
        <img src={Logo} alt='Logo' />
      </div>
      <div className='line'></div>
      <nav>
        <ul>
          <li className='active'>
            <Link to='/'>
              <span>00</span> Home
            </Link>
          </li>
          <li>
            <Link to='/destination'>
              <span>01</span> Destination
            </Link>
          </li>
          <li>
            <Link to='/crew'>
              <span>02</span> Crew
            </Link>
          </li>
          <li>
            <Link to='/technology'>
              <span>03</span> Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
