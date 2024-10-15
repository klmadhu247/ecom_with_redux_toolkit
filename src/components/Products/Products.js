import axios from "axios";
import { useEffect, useState } from "react";
import { addToCart,removeFromCart } from "../../store/cartSlicer";
import { useSelector,useDispatch } from "react-redux";


const Products = ()=>
{

    const dispatch = useDispatch()

    const [products,setProducts] = useState([]);

    const [cartFlage,setCartFlage] = useState({})

    const getProducts = async()=>
    {
        const respo = await axios.get('https://fakestoreapi.com/products');
        const data = await respo.data;
        setProducts(data)
    }

    const handleAdd =(product)=>
    {
        setCartFlage((previous)=>
        ({
            ...previous,
           [product.id]:!previous[product.id]
        }))

        dispatch(addToCart(product))
    }

    const handleRemove=(product)=>
    {
        setCartFlage((previous)=>({
            ...previous, [product.id]:!previous[product.id]
        }))
        dispatch(removeFromCart(product))
    }

    useEffect(()=>{getProducts()},[])

    const cards = products.map((product)=>(
        <div key={product.id} className="card">
            <h3 className="text-gray-600 font-bold text-center mb-3 text-center">{product.title.split(" ").slice(0,3).join(" ")+"..."}</h3>
            <p className="text-gray-400 font-normal  ">{product.description.split(" ").slice(0,6).join(" ")+"..."}</p>
            <img src={product.image} className="w-fit h-52 items-center justify-center p-5 mx-auto "/>
            <div className="flex justify-around items-center mt-3">
                <p className="text-green-500 font-bold">$ {product.price}</p>
                { cartFlage[product.id]? <button onClick={()=>handleRemove(product)} className=" bg-white text-gray-900 border-2 border-black px-3 ml-5  rounded-3xl hover:bg-gray-900 hover:text-white transition duration-300">Remove Item</button>: <button onClick={()=>handleAdd(product)} className=" bg-white text-gray-900 border-2 border-black px-3 ml-5  rounded-3xl hover:bg-gray-900 hover:text-white transition duration-300">Add To Cart</button>}
            </div>

    
    </div>

)
    )

   




    return(
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-2 mt-4 p-4 mx-3 ms-3  ">
                {cards}



            </div>
           
        </div>
    )
}
export default Products;