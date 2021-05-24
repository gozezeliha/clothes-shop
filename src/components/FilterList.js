import Filter from './Filter';
import { useContext } from 'react';
import { Context } from '../context/ProductsProvider';


const FilterList = () => {

    const { filters } = useContext(Context);

    return (
        <div className="product-filters">
            {filters.map((filter, index) => (
                <Filter key={index} filter={filter} />
            ))}
        </div>
    )
}

export default FilterList;