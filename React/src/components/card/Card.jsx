import PropTypes from "prop-types";
import "./styles.css";
function Card({ name, email, age, bg }) {
  return (
    <>
      <div>
        <h1>Card</h1>
        <div id="card" style={{ backgroundColor: bg }}>
          <p>
            <b>Name: </b> {name}
          </p>
          <p>
            <b>Email: </b> {email}
          </p>
          <p>
            <b>Age: </b> {age}
          </p>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  bg: PropTypes.string.isRequired,
};

export default Card;
