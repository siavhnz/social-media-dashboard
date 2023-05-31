import { data } from "../../store/data";
import IOSSwitch from "../ui/IOSSwitch";

const Header = () => {
    return <header>
        <div>
            <h2>
                {data.title}
            </h2>
            <p>
                Total Followers: {data.followers.toLocaleString()}
            </p>
        </div>
        <div>
            Dark Mode
            <IOSSwitch />
        </div>
    </header>
}

export default Header;