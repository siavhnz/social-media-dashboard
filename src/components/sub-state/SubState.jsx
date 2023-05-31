
import { ReactComponent as Up } from "../../assets/images/icon-up.svg";
import { ReactComponent as Down } from "../../assets/images/icon-down.svg";
import { getIcon } from "../social-icon";

const SubState = ({ action, platform, quantity, swing, isUp }) => {

    const Icon = getIcon(platform);
    return <div>
        <div>
            <h3>{action}</h3>
            {Icon}
        </div>
        <div>
            <p>{quantity}</p>
            <div>
                {isUp && <Up aria-hidden={true} focusable={false} />}
                {!isUp && <Down aria-hidden={true} focusable={false} />}
                {swing}
            </div>
        </div>
    </div>

}

export default SubState;