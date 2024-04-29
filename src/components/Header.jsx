import { Link } from 'react-router-dom';


const Header = ()=>{
    return (
    <header>
        <h1>React Demo</h1>
        <nav>
            <ul>
                <li>
                   <Link to='/'>Landing page</Link>
                   
                </li>
                <li>
                <Link to='/about'>About</Link>
                </li>
                <li>
                <Link to='/person'>Person</Link>
                </li>
            </ul>
        </nav>
        </header>
        );
};

export default Header;