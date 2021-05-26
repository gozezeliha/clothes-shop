import { useContext } from 'react';
import { Context } from '../context/ProductsProvider';

const BuyItem = ({item}) => {

    const { deleteBudget } = useContext(Context);

    return(
        <div className="buy-item">
                        <div onClick={() => deleteBudget(item.id)} className="buy-item__delete"><i class="fas fa-times fa-2x"></i></div>
                        <img className="buy-item__img" src={item.image} />
                        <div className="buy-item__details">
                            <h2 className="buy-item__details--title">{item.title}</h2>
                            <p className="buy-item__details-content" >M | Front print and paisley print</p>
                            <span className="buy-item__details-count">Quantity: 1</span>
                        </div>
                        <div className="buy-item__price">{item.price} $</div>
        </div>
    )
}

export default BuyItem;