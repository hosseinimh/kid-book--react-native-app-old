import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const SIZES = {
  padding1: 30,
  padding2: 24,
  padding3: 16,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  width,
  height,
};

export const FONTS = {
  h1: {fontFamily: 'Vazir-Bold', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Vazir-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Vazir-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Vazir-Bold', fontSize: SIZES.h4, lineHeight: 22},
  body1: {fontFamily: 'Vazir', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Vazir', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Vazir', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Vazir', fontSize: SIZES.body4, lineHeight: 22},
};
