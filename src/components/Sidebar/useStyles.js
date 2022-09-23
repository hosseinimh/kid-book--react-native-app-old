import {useTheme} from '../../hooks';
import * as styles from '../../theme/style';

const useStyles = () => {
  const {colors} = useTheme();

  const container = {
    padding: 15,
  };

  const profileImage = {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginTop: 8,
    alignSelf: 'flex-end',
  };

  const profileName = [
    styles.h4,
    {
      color: colors.sidebarText,
      marginTop: 20,
      alignSelf: 'flex-end',
    },
  ];

  const viewProfile = [
    styles.p,
    {
      marginTop: 6,
      color: colors.sidebarText,
      alignSelf: 'flex-end',
    },
  ];

  const tabsContainer = {flexGrow: 1, marginTop: 50};

  return {
    container,
    profileImage,
    profileName,
    viewProfile,
    tabsContainer,
  };
};

export default useStyles;
