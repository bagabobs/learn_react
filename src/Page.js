import {Fragment, useContext} from "react";
import {UserContext} from "./UserProvider";

function UserName() {
    const user = useContext(UserContext);
    return (
        <p>
            Logged in as <strong>{user.name}</strong>
        </p>
    );
}

export function Page1() {
    return (
        <Fragment>
            <h1>Page 1</h1>
            <UserName/>
        </Fragment>
    );
}

export function Page2() {
    return (
        <Fragment>
            <h1>Page 2</h1>
            <UserName/>
        </Fragment>
    );
}

export function Page3() {
    return (
        <Fragment>
            <h1>Page 3</h1>
            <UserName/>
        </Fragment>
    );
}
