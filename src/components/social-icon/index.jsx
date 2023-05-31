import { ReactComponent as Facebook } from "../../assets/images/icon-facebook.svg";
import { ReactComponent as Instagram } from "../../assets/images/icon-instagram.svg";
import { ReactComponent as Twitter } from "../../assets/images/icon-twitter.svg";
import { ReactComponent as Youtube } from "../../assets/images/icon-youtube.svg";

export const getIcon = (platform) => {

    if (platform === "twitter") {
        return <Twitter aria-hidden={true} focusable={false} />
    }
    else if (platform === "facebook") {
        return <Facebook aria-hidden={true} focusable={false} />
    }
    else if (platform === "instagram") {
        return <Instagram aria-hidden={true} focusable={false} />
    }
    else if (platform === "youtube") {
        return <Youtube aria-hidden={true} focusable={false} />
    }
}

