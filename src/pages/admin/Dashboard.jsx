import Layout from "../../components/layout";
import MainState from "../../components/main-state/MainState";
import SubState from "../../components/sub-state/SubState";
import { data } from "../../store/data";

const Dashboard = () => {
    return <Layout>
        <div>
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
        <div>
            <h3>
                Overview - Today
            </h3>
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

    </Layout>
}

export default Dashboard;