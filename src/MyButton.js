import React from "react";

const MyButton = ({ disabled, text }) => (
    <button disabled={disabled}>{text}</button>
);

MyButton.defaultProps = {
    text: 'My Button, biar berubah',
    disabled: true
};

export default MyButton;
