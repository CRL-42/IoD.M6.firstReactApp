import Avatar from "./Avatar";

function UserInfo(props) {
    return (
        <div>
            <Avatar avatar={props.user} />
            <div className="UserInfo-name">{props.user.name}</div>
        </div>
    );
}

export default UserInfo