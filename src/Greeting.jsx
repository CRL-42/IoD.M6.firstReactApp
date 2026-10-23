function Greeting(props, children) {
    let name = "world";
    if (props.name) name = props.name;
    return (
        <div className="Greeting componentBox">
            <h2>Exercise 1</h2>
            <p>Hello {name}</p>
            {props.children}
        </div>
    )
}

export default Greeting