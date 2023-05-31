import Layout from "../../components/layout";
import MainState from "../../components/main-state/MainState";
import SubState from "../../components/sub-state/SubState";
import { data } from "../../store/data";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
    return <Layout>
        <div className={styles["main-state-container"]}>
            {data.mainStates.map((state, index) => {
                return <MainState
                    key={index}
                    platform={state.platform}
                    user={state.user}
                    quantity={state.quantity}
                    label={state.label}
                    swing={state.swing}
                    isUp={state.isUp} />
            })}
        </div>
        <div className={styles["sub-state-container"]}>
            <h3 className={styles.title}>
                overview - today
            </h3>
            <div>
                {data.subStates.map((state, index) => {
                    return <SubState
                        key={index}
                        action={state.action}
                        platform={state.platform}
                        quantity={state.quantity}
                        swing={state.swing}
                        isUp={state.isUp} />
                })}
            </div>
        </div>
    </Layout>
}

export default Dashboard;