import ProductsProvider from './context/ProductsProvider';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import Buy from './components/Buy';

const App = () => {
  return (

    <ProductsProvider>
      <div className="container">
        <section className="main">
          <Header />
          <ProductsList />
        </section>
      </div>
      <Buy/>
    </ProductsProvider>

  );
}

export default App;
