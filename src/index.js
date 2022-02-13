import {render} from "react-dom";

import WithFragments from "./WithFragments";
import WithOutFragments from "./WithOutFragments";

render(
    <section>
        <WithOutFragments/>
        <WithFragments/>
    </section>,
    document.getElementById('root')
);
