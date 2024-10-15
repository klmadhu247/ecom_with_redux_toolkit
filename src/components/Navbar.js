import { Link } from 'react-router-dom';
import ecomLogo from '../assets/ecomLogo.png';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';


const Navbar = () => {

    const itemsCart = useSelector(state=>state.cart)
  return (
    <div style={{position:'sticky',top:'0',zIndex:'10'}}>
      <nav className="NavBar">
       
        <Link to="/">
          <img src={ecomLogo} alt="ecomLogo" className='logo' />
        </Link>
        <div className='flex items-center mr-14'>
        
          <Link to="/" className='text-white mr-4'>Home</Link>
         
          <Link to="/Cart">
          {/* <div className="relative">
              <FaShoppingCart className="text-2xl"/>
              {
                cart.length > 0 &&
                <span 
                className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                {cart.length}
                </span>

              }
            </div> */}


           <div className='relative'>
           <FaShoppingCart className='text-white ps-4 w-9 h-5' />
           {itemsCart.length>0 &&

       
        
<span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
        {itemsCart.length}
    </span>
    }
            </div> 
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
