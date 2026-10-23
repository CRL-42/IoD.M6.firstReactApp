function Avatar(props) {
    return(
        <div>
            <img className="Avatar" 
            src={props.avatar.avatarUrl} 
            alt={props.avatar.name} />
        </div>
    )
}

export default Avatar