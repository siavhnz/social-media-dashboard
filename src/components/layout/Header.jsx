import { data } from "../../store/data";
import IOSSwitch from "../ui/IOSSwitch";
import Wrapper from "./Wrapper";
import styles from "./Header.module.css";

const Header = () => {
    return <header className={styles.header}>
        <Wrapper>
            <div className={styles.info}>
                <h2 className={styles.title}>
                    {data.title}
                </h2>
                <p className={styles.subtitle}>
                    Total Followers: {data.followers.toLocaleString()}
                </p>
            </div>
            <div className={styles["theme-switcher"]}>
                <span>Dark Mode</span>
                <IOSSwitch />
            </div>
        </Wrapper>
    </header>
}

export default Header;