import React from "react";

function User(props) {
    const {id, name, username, email} = props;

    return (
        <div className="dib m20 b1sb tac">
            <img src={`https://robohash.org/${id}`} alt="Robots"/>
            <h2>{name}</h2>
            <h4>{username}</h4>
            <p>{email}</p>
        </div>
    )
}

export default User;