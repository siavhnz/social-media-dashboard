
import { getIcon } from "../social-icon";
import Swing from "../swing";
import styles from "./SubState.module.css";

const SubState = ({ action, platform, quantity, swing, isUp }) => {

    const Icon = getIcon(platform);
    return <div className={styles.container}>
        <div>
            <h3 className={styles.title}>{action}</h3>
            {Icon}
        </div>
        <div>
            <p className={styles.quantity}>{quantity}</p>
            <div className={styles.swing}>
                <Swing isUp={isUp} text={swing} />
            </div>
        </div>
    </div>

}

export default SubState;