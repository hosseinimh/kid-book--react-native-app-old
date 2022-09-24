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

  const tabContainer = {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingVertical: 8,
    paddingLeft: 35,
    paddingRight: 13,
    borderRadius: 8,
    marginTop: 15,
  };

  const tabIcon = {width: 25, height: 25};

  const tabText = [styles.pBold, {fontSize: 15, paddingRight: 15}];

  return {
    container,
    profileImage,
    profileName,
    viewProfile,
    tabsContainer,
    tabContainer,
    tabIcon,
    tabText,
  };
};

export default useStyles;
