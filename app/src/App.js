import Header from "./components/Header";

import "./App.css";

function App() {
    return (
        <div className="main">
            <div className="add">
                <Header />
            </div>
            <div className="items" id="items"></div>
        </div>
    );
}

export default App;
