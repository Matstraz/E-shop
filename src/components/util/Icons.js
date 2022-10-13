import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faHeart as redHeart } from "@fortawesome/free-solid-svg-icons";
import { css } from "aphrodite";
import animation from "./Animations";

const icons = {
  header: {
    heart: <FontAwesomeIcon icon={faHeart} className="h-8" />,
    redHeart: (
      <FontAwesomeIcon
        icon={redHeart}
        className={`${css(animation.pulse)} h-8 text-red-700`}
      />
    ),
    cart: <FontAwesomeIcon icon={faBookmark} className="h-8" />,
  },
  bodyContent: {
    heart: <FontAwesomeIcon icon={faHeart} className="h-5" />,
  },
};

export default icons;
