import PropTypes from "prop-types";

const Header = ({ title }) => {
    return (
        <div className="container">
            <h1>{title}</h1>
            <button
                id="btn"
                onClick={() => {
                    var input = window.prompt("Enter a new task");
                    var new_h3 = document
                        .querySelector("div.items")
                        .appendChild(document.createElement("h3"));
                    new_h3.innerText = input;
                }}
            >
                Add
            </button>
            <button
                className="remove"
                onClick={() => {
                    var r_input = window.prompt(
                        "Enter item you want to remove"
                    );
                    var items = document.querySelectorAll("h3");
                    for (let i of items) {
                        if (i.textContent === r_input) {
                            i.style.display = "none";
                        }
                    }
                }}
            >
                Remove
            </button>
        </div>
    );
};

Header.defaultProps = {
    title: "Task Tracker",
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
