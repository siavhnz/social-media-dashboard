
import { ReactComponent as Up } from "../../assets/images/icon-up.svg";
import { ReactComponent as Down } from "../../assets/images/icon-down.svg";
import styles from "./index.module.css";

const Swing = ({ isUp, text }) => {
    return <div className={`${styles.swing} ${isUp ? styles["swing-green"] : styles["swing-red"]}`}>
        {isUp && <Up aria-hidden={true} focusable={false} />}
        {!isUp && <Down aria-hidden={true} focusable={false} />}
        {text}
    </div>
}

export default Swing;