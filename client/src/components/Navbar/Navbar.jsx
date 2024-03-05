import React , {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
import Avatar from '../../components/Avatar/Avatar'
// import Button from '../../components/Button/Button'
import './Navbar.css'
import { currentUser } from '../../actions/currentUser'



const Navbar = () => {

  const dispatch=useDispatch();
  var User = useSelector((state) => state.currentUserReducer);

  useEffect(() => {
    dispatch(currentUser(currentUser(JSON.parse(localStorage.getItem("Profile")))))
  }, [dispatch])
  

  return (
    <nav className='main-nav'>
        <div className="nav">
           <Link to='/' className="nav-item nav-logo">
            <img src={logo} alt="logo" />
           </Link>
           <Link to='/' className='nav-item nav-btn'>About</Link>
           <Link to='/' className='nav-item nav-btn'>Products</Link>
           <Link to='/' className='nav-item nav-btn'>For Team</Link>
           <form>
            <input type="text" placeholder='Search....' />
            <img src={search} alt="search" width="18" className='search-icon'/>
           </form>
            { User === null ? 
            <Link to='/Auth' className='nav-item nav-link'>LogIn</Link> :
            <>
            <Avatar backgroundColor="#009dff" color="white" borderRadius="50%" px="10px" py="10px" mar="2px" fontSize="small"><Link to="/User" style={{color:"white" , textDecoration:'none'}}>M</Link></Avatar>
            <button className='nav-item nav-link'>Log Out</button>
            </>
        }
        </div>
    </nav>
  )
}

export default Navbar