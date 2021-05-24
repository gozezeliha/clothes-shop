import img from './assets/img/10547961582846888_2.jpg';
import ProductsProvider from './context/ProductsProvider';
import Header from './components/Header';
import FilterList from './components/FilterList';

const App = () => {
  return (
   
    <ProductsProvider>
    <div className="container">

      <section className="main">
        <Header/>
          <FilterList/>

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
    </ProductsProvider>

  );
}

export default App;
