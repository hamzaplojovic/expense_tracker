import PropTypes from "prop-types";

const Header = ({ title }) => {
    return (
        <div className="container">
            <h1>{title}</h1>
            <button>Add</button>
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
