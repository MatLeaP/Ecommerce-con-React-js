import FunctionCounter from "../ItemCount/ItemCount";








const ItemListContainer = ({title}) => {
    return(
        <div>
            <h1>{title} </h1>
            <FunctionCounter stock= "10" initial= {1} />
        </div>
    )
    
}

export default ItemListContainer;