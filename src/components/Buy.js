// import { useContext } from 'react';
import { useContext,useState,useEffect } from 'react';
import BuyItem from './BuyItem';
import { Context } from '../context/ProductsProvider';

const Buy = () => {

    const { budget,totalCount,isOpen,changeStatus } = useContext(Context);
    
    return (
        <div className={!isOpen ? "buy buy--open" : "buy"}>

            {isOpen ? <div onClick={() => changeStatus(true)} className="open-icon"><i className="fas fa-shopping-cart fa-2x"></i></div>
            :<div onClick={() => changeStatus(false)} className="close-icon"><i className="fas fa-times fa-2x"></i></div>}
            <div className="buy__content">
                <div className="buy__content--header">
                    <h2>Basket</h2>
                </div>
                <div className="buy__content--main">
                    {budget.map((item,index) => (
                        <BuyItem key={index} item={item}/>
                    ))}
                </div>
                <div className="buy__content--footer">
                    <div className="buy-total">
                        <h2>SUBTOTAL</h2>
                        <span>$ {totalCount.toFixed(2)}</span>
                    </div>
                    <button  className="buy-button">
                        CHECKOUT
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Buy;