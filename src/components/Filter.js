const Filter = (props) => {
    return(
        <button className="product-filters__item" value={props.filter}>{props.filter}</button>
    )
}

export default Filter;