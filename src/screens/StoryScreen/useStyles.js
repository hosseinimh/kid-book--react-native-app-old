import {useTheme} from '../../hooks';
import {SIZES} from '../../theme/style';

const useStyles = () => {
  const {colors} = useTheme();

  const headerContainer = {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.padding2,
    paddingHorizontal: SIZES.padding3,
    paddingBottom: SIZES.padding3,
    backgroundColor: colors.border,
    width: '100%',
  };

  const container = {
    marginBottom: SIZES.padding2,
    paddingHorizontal: SIZES.padding3,
  };

  const rightContainer = {};

  const leftContainer = {};

  const headerIcon = {
    width: 25,
    height: 25,
    tintColor: colors.text,
    marginTop: SIZES.padding2,
  };

  const progress = {
    position: 'relative',
    top: -SIZES.padding2,
  };

  return {
    headerContainer,
    container,
    rightContainer,
    leftContainer,
    headerIcon,
    progress,
  };
};

export default useStyles;
