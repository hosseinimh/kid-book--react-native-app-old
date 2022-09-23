import SCREENS from '../constants/screens';
import {screens} from '../constants/strings';

const screenTitle = screen => {
  let title = screens.homeScreen;

  switch (screen) {
    case SCREENS.HomeScreen:
      title = screens.homeScreen;

      break;
    default:
      break;
  }

  return title;
};

const utils = {
  screenTitle,
};

export default utils;
