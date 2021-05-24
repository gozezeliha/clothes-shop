const Filter = (props) => {
    return(
        <a className="product-filters__item" value={props.filter}>{props.filter}</a>
    )
}

export default Filter;