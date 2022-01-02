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
            <button>Remove</button>
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
