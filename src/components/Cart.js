import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { removeFromCart } from "../store/cartSlicer";
import { useEffect, useState } from "react";






const Cart = () => {

    



    const cartItems = useSelector(state => state.cart); 
    const dispatch = useDispatch();
    const [totalAmount,setTotalAmount] = useState(0)


    const handleBin =(item)=>
    {
        dispatch(removeFromCart(item))
       
 }

 useEffect(()=>{
    const total = cartItems.reduce((acc,item)=>acc+item.price,0)
    setTotalAmount(total)

 },[cartItems])

   

    if (cartItems.length === 0) {
        return <div className="flex flex-col justify-center items-center mt-36">
           <p>Your cart is empty</p> 
           <Link to="/"> <button  className="bg-green-700 text-white px-4 py-2 border rounded-xl mt-3">Shop Now</button> </Link>
        </div>; 
    }

    return (
        
        <div>
            
           <div className="flex">
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
                {cartItems.map((item) => (
                    <div key={item.id} className="ms-10">
                    <div  className=" flex p-4 w-[600px] items-center  ms-3 mt-2">
                        <img src={item.image} alt={item.title} className="h-auto w-32 "/>
                       <div className="ml-6">
                         <h4 className="text-gray-800 font-bold ">{item.title}</h4>
                         <p>{item.description.split(" ").slice(0,15).join(" ")+"..."}</p>
                        <div className="flex justify-between items-center">
                            <p className="text-green-700 mt-4 font-bold">$ {item.price}
                       
                        </p>
                       <span className="bg-pink-200 px-2 py-2 rounded-full mt-4 ms-4 cursor-pointer" onClick={()=>handleBin(item)}><RiDeleteBin5Fill/>
                       </span> 
                        </div>
                       
                        </div>
                        
                    </div>
                    <hr className="w-[700px] border-b-2 border-gray-900 mt-10 rounded-sm "/>
                    </div>
                    
                ))}
            </div>
            <div className="mt-5 ms-14">
                <h3 className="text-green-700 font-bold">Your cart </h3>  
                <span className="text-green-700 text-3xl font-semibold">Summary</span>
                <p className="font-semibold mt-4">Totoal Items: {cartItems.length} </p>
                <p className="mt-60">Total Amount: $  {totalAmount}</p>
            </div>

            
           
            </div> 

            
        </div>
    );
};

export default Cart;
