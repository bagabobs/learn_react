import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ items }) => (
    <ul>
        {items.map(i => (
            <li key={i}>{i}</li>
        ))}
    </ul>
);
