import {PropTypes} from "prop-types";
import styles from "./Button.module.css";
function Button({children, onClick, type}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}
Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
};

export default Button;
