import { Promise } from "bluebird";
import { Fragment, useEffect, useState } from "react";


Promise.config( { cancellation: true } );

function fetchUser() {
    console.log('fetching user');
    return new Promise(resolve => {
        setTimeout(() => {
            resolve( { age: 30, name: 'Bagabobs' } );
        }, 4000);
    });
}

export default function User() {
    const [ age, setAge ] = useState("loading...");
    const [ name, setName ] = useState("loading...");

    useEffect(() => {
        const promise = fetchUser().then(user => {
            setAge(30);
            setName('Adam');
        });

        return () => {
            promise.cancel();
        };
    }, []);

    return (
        <Fragment>
            <p>Age: {age}</p>
            <p>Name: {name}</p>
        </Fragment>
    );
}

