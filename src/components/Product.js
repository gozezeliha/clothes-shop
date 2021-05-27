import { useContext,useEffect } from 'react';
import { Context } from '../context/ProductsProvider';

const Product = (props) => {
    
    const product = props.product;

    const { addBudget } = useContext(Context);

    return (
        <div className="product-item">
            <img src={product.image} className="product-item__img" alt={product.title}/>
            <div className="product-item__price">
                <span className="product-item__price--title">{product.title}</span>
                <span className="product-item__price--count">{product.price} $</span>
                <button onClick={() => addBudget(product)} className="product-item__price--button" value={product.id}>Buy Now</button>
            </div>
        </div>
    )
}

export default Product;