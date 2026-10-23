function Movie({title, year, synopsis}) {
    return (
        <li>
            <h3>{title}</h3>
            <span>({year})</span>
            <p>{synopsis}</p>
        </li>
    )
}

export default Movie