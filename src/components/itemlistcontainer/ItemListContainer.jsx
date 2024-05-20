import "./ItemListContainer.css"
import GetProducts from "../../data/data"
import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const ItemListContainer = ( {bienvenida}) => {
    const [products, setProducts] = useState([]);
    const {idCategory} = useParams()

    useEffect(() => {
        
        GetProducts()
        .then((respuesta) => {
            if(idCategory){
                const productsFilter = respuesta.filter( (productsRes) => productsRes.category === idCategory )
                setProducts(productsFilter)
            }else{
                setProducts(respuesta)
            }
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log("Finalizo la promesa")
        });
    }, [idCategory]);
        
    return(
        <div>
            <div className="ItemListContainer text-center">
                {bienvenida}
            </div>
            <ItemList products = {products}/>
        </div>
    )
} 

export default ItemListContainer