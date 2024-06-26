import { useState, useEffect } from "react";
import GetProducts from "../../data/data";
import ItemDetail from "./Item Detail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const {idProduct} = useParams()

    useEffect (() => {
        getProducts()
            .then((respuesta) => {
            const productFind = respuesta.find( (productRes) => productRes.id === Number(idProduct));
            setProduct (productFind);
        })
        .catch((error) => {
            console.error(error);
        })
        .finally (() => {
            console.log("Finalo la promesa");
        });
    }, []);

    return (
        <Item Detail product={product} />
    );
};
export default ItemDetailContainer;
