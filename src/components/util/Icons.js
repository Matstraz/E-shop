import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart, faBookmark } from "@fortawesome/free-regular-svg-icons";

const icons = {
  header: {
    heart: <FontAwesomeIcon icon={faHeart} className="h-8" />,
    cart: <FontAwesomeIcon icon={faBookmark} className="h-8" />,
  },
};

export default icons;
