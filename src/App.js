import ProductsProvider from './context/ProductsProvider';
import Header from './components/Header';
import FilterList from './components/FilterList';
import ProductsList from './components/ProductsList';

const App = () => {
  return (

    <ProductsProvider>
      <div className="container">
        <section className="main">
          <Header />
          <FilterList />
          <ProductsList />
        </section>

      </div>
    </ProductsProvider>

  );
}

export default App;
