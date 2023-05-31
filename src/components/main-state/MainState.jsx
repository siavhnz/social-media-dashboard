
import { ReactComponent as Up } from "../../assets/images/icon-up.svg";
import { ReactComponent as Down } from "../../assets/images/icon-down.svg";
import { getIcon } from "../social-icon";

const MainState = ({ platform, user, quantity, label, swing, isUp }) => {

    const Icon = getIcon(platform);
    return <div>
        {Icon}
        <h4>{user}</h4>
        <p>{quantity}</p>
        <p>{label}</p>
        <div>
            {isUp && <Up aria-hidden={true} focusable={false} />}
            {!isUp && <Down aria-hidden={true} focusable={false} />}
            {swing}
        </div>
    </div>

}

export default MainState;