import {render} from "react-dom";
import MyList from "./MyList";

const items = [
    { id: 1, name: 'Satu' },
    { id: 2, name: 'Dua' },
    { id: 3, name: 'Tiga' }
];

render(
    <MyList items={ items }/>,
    document.getElementById('root')
);
