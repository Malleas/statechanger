import React from "react";
import Counter from "./Counter";

const App = () => {
    return(
        <div>
            This is the first page of the app
            <Counter title="First message" />
            <Counter title="Second Counter" />
            <Counter title="Yet another counter" />
            <Counter title="This is the fourth counter on the page" />
        </div>
    )
}

export default App;