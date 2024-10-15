import { useSelector } from "react-redux";


 


const CartCount = ()=>
{
 const itemsCart = useSelector(state=>state.cart)

    return(

        <div>

            {itemsCart.length>0 &&

       
        
        <div className=" flex  justify-center absolute  sticky top-0 z-20   bg-green-600 text-sm text-white border rounded-full items-center text-center border-green-900  w-5 h-5 mr-1 animate-bounce ">
                {itemsCart.length}
            </div>
            }

            </div>
    )
}
export default CartCount;