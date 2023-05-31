import { data } from "../../store/data";
import IOSSwitch from "../ui/IOSSwitch";
import Wrapper from "./Wrapper";
import styles from "./Header.module.css";
import { AppContext } from "../../store/context/app-context";
import { useContext } from "react";

const Header = () => {

    const appCtx = useContext(AppContext);

    return <header className={styles.header}>
        <div className={styles.pattern} />
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
                <IOSSwitch onChange={appCtx.toggleTheme} checked={appCtx.theme.light} semitheme={appCtx.theme.light.toString()} />
            </div>
        </Wrapper>
    </header>
}

export default Header;