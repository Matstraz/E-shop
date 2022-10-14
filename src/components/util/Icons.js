import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark } from "@fortawesome/free-regular-svg-icons";
import {
  faHeart as redHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { css } from "aphrodite";
import animation from "./Animations";

const icons = {
  header: {
    heart: <FontAwesomeIcon icon={faHeart} className="h-7" />,
    redHeart: (
      <FontAwesomeIcon
        icon={redHeart}
        className={`${css(animation.pulse)} h-7 text-red-700`}
      />
    ),
    cart: <FontAwesomeIcon icon={faBookmark} className="h-6 md:h-8" />,
    search: <FontAwesomeIcon icon={faMagnifyingGlass} className="h-5" />,
  },
  bodyContent: {
    heart: <FontAwesomeIcon icon={faHeart} className="h-5" />,
  },
};

export default icons;
