import {Fragment, useEffect, useState} from "react";
import {Page1, Page2, Page3, Status} from './Page';
import {UserProvider} from "./UserProvider";
import {StatusProvider} from "./StatusProvider";

function ChoosePage( { page } ) {
    const Page = [ Page1, Page2, Page3 ][page];
    return <Page/>
}

function App() {
    const [ page, setPage ] = useState(0);

    return (
        <UserProvider>
            <StatusProvider>
                <button onClick={ () => setPage(0) } disabled={ page === 0}>
                    Page 1
                </button>
                <button onClick={ () => setPage(1) } disabled={ page === 1}>
                    Page 2
                </button>
                <button onClick={ () => setPage(2) } disabled={ page === 2}>
                    Page 3
                </button>
                <ChoosePage page={ page } />
                <Status />
            </StatusProvider>
        </UserProvider>
    );
}

export default App;
