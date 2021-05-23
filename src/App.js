import img from './assets/img/10547961582846888_2.jpg';

const App = () => {
  return (
    <div className="container">

      <section className="main">
        <div className="header">

          <div className="product-count">
            16 Product(s) found.
          </div>

          <div className="product-option">
            <span className="product-option__text">Order by</span>
            <select className="product-option__select">
              <option value>Select</option>
              <option value="lowest">Lowest to highest</option>
              <option value="highest">Highest to lowest</option>
            </select>
          </div>

          </div>

          <div className="product-filters">
            <button className="product-filters__item" value="XS">XS</button>
            <button className="product-filters__item" value="S">S</button>
            <button className="product-filters__item" value="M">M</button>
            <button className="product-filters__item" value="ML">ML</button>
            <button className="product-filters__item" value="L">L</button>
            <button className="product-filters__item" value="XL">XL</button>
            <button className="product-filters__item" value="XXL">XXL</button>
          </div>

          <div className="product-list">
            <div className="product-item">
              <img src={img} className="product-item__img" alt="Girl in a jacket"/>
              <div className="product-item__price">
                <span className="product-item__price--text">14.80$</span>
              </div>
            </div>
            <div className="product-item">
              <img src={img} className="product-item__img" alt="Girl in a jacket"/>
              <div className="product-item__price">
                <span className="product-item__price--text">14.80$</span>
              </div>
            </div>
            <div className="product-item">
              <img src={img} className="product-item__img" alt="Girl in a jacket"/>
              <div className="product-item__price">
                <span className="product-item__price--text">14.80$</span>
              </div>
            </div>
            <div className="product-item">
              <img src={img} className="product-item__img" alt="Girl in a jacket"/>
              <div className="product-item__price">
                <span className="product-item__price--text">14.80$</span>
              </div>
            </div>
            <div className="product-item">
              <img src={img} className="product-item__img" alt="Girl in a jacket"/>
              <div className="product-item__price">
                <span className="product-item__price--text">14.80$</span>
              </div>
            </div>
            <div className="product-item">
              <img src={img} className="product-item__img" alt="Girl in a jacket"/>
              <div className="product-item__price">
                <span className="product-item__price--text">14.80$</span>
              </div>
            </div>
            <div className="product-item">
              <img src={img} className="product-item__img" alt="Girl in a jacket"/>
              <div className="product-item__price">
                <span className="product-item__price--text">14.80$</span>
              </div>
            </div>
            <div className="product-item">
              <img src={img} className="product-item__img" alt="Girl in a jacket"/>
              <div className="product-item__price">
                <span className="product-item__price--text">14.80$</span>
              </div>
            </div>
          </div>

        <div className="filters"></div>
      </section>

    </div>
  );
}

export default App;
