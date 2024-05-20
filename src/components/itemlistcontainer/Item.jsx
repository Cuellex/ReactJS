import { Link } from "react-router-dom";

const Item = ({product}) => {
    return (
        <div className="cards">
            <img src={product.image} />
            <p>{product.name}</p>
            {/* <p>{product.description}</p>  */} {/* Quitar comentario cuando las imagenes se cargen correctamente */} {/* Introducir descripcion dentro de la portada con un hover y debajo un boton con detalles */}
            <Link to={"/detail/" + product.id}>Detalles</Link>
        </div>
    );
};

export default Item;
