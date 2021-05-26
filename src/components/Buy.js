const Buy = () => {
    return (
        <div className="buy buy--open">
            <div className="open-icon"><i class="fas fa-shopping-cart fa-2x"></i></div>
            {/* <div className="close-icon"><i class="fas fa-times"></i></div> */}
            <div className="buy__content">
                <div className="buy__content--header">
                    <h2>Basket</h2>
                </div>
                <div className="buy__content--main">
                    <div className="buy-item">
                        <div className="buy-item__delete"><i class="fas fa-times fa-2x"></i></div>
                        <img className="buy-item__img" src="https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        <div className="buy-item__details">
                            <h2 className="buy-item__details--title">Dark Thug Blue-Navy T-Shirt</h2>
                            <p className="buy-item__details-content" >M | Front print and paisley print</p>
                            <span className="buy-item__details-count">Quantity: 1</span>
                        </div>
                        <div className="buy-item__price">29.4$</div>
                </div>
                    
                </div>
                <div className="buy__content--footer">
                    <div className="buy-total">
                        <h2>SUBTOTAL</h2>
                        <span>$ 49.35</span>
                    </div>
                    <button className="buy-button">
                        CHECKOUT
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Buy;