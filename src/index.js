const {render} = require("react-dom");


const enabled = false;
const text = 'A Button';
const placeholder = 'input value..';
const size = 50;

render(
    <section>
        <button disbled={!enabled}>{text}</button>
        <input placeholder={placeholder} size={size}/>
    </section>,
    document.getElementById('root')
);
