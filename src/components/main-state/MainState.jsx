import { getIcon } from "../social-icon";
import Swing from "../swing";
import styles from "./MainState.module.css";

const MainState = ({ platform, user, quantity, label, swing, isUp }) => {

    const Icon = getIcon(platform);
    return <div className={styles.container}>
        <div className={`${styles.border} ${styles[`${platform}`]}`} />
        <div className={styles.user}>
            {Icon}
            <h4>{user}</h4>
        </div>
        <p className={styles.quantity}>{quantity}</p>
        <p className={styles.label}>{label}</p>
        <div className={styles.swing}>
            <Swing isUp={isUp} text={swing} />
        </div>
    </div>

}

export default MainState;