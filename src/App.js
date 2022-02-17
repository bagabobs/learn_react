import {Fragment, useState} from "react";

export default function App() {
    const [name, setName] = useState('Adam');
    const [age, setAge] = useState(35);

    return (
        <Fragment>
            <section>
                <input value={name} onChange={e => setName(e.target.value)} />
                <p>My Name is {name}</p>
            </section>
            <section>
                <input value={age} onChange={e => setAge(e.target.value)} />
                <p>My Age is {age}</p>
            </section>
        </Fragment>
    );
}
