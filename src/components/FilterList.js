import Filter from './Filter';
import { useContext } from 'react';
import { Context } from '../context/ProductsProvider';


const FilterList = () => {

    const { filters } = useContext(Context);

    return (
        <div className="product-filters">
            {filters.map(filter => (
                <Filter filter={filter} />
            ))}
        </div>
    )
}

export default FilterList;