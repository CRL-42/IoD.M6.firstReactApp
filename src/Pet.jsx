function Pet(props) {
    let type = 'unknown';
    if (props.type) type = props.type;
    return (
        <div className="Pet componentBox">
            <h2>My Pet</h2>
            <p>Type: {type}</p>

            {/* if props.name is truthy (not undefined), render it in a <p> tag, otherwise render nothing */}
            {props.name ? <p>Name: {props.name}</p> : null}
            
            {/* Only render the <p> tag if the expression before the && is truthy */}
            {props.colour && <p>Colour: {props.colour}</p>}
        </div>
    )
}

export default Pet;