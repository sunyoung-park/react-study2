import PropTypes from"prop-types";
import styles from "./Button.module.css";

function Button ({text}){
    return (
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    );
}

Button.propTypes = {
    //반드시 String 이어야만 함.
    text:PropTypes.string.isRequired,
};

export default Button;