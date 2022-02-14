import MyComponent from "./MyComponent";
import {render} from "react-dom";


const myComponent = render(<MyComponent/>, document.getElementById('root'));

setTimeout(() => {
    myComponent.setState({
        heading: 'React Awesome',
        content: 'Done!'
    });
}, 3000);
