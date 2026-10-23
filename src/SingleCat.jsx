import SortButton from "./SortButton"

// Exercise 2.
function SingleCat({name, latinName, imgUrl, id, onRemoveCat}) {

    return (
        <li>
            <h3>{name}</h3>
            <p>({latinName})</p>
            <img src={imgUrl} alt={name} width="200px"/>
            <div>
            <SortButton label='Remove Cat' onClick={() => onRemoveCat(id)} />
            </div>
        </li>
    )
}

export default SingleCat
// Exercise 2 end.