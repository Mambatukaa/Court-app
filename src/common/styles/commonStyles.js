import { StyleSheet, Platform } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  bottomShadow: {
    marginBottom: 10,
    shadowColor: colors.colorBlack,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 3
  },
  topShadow: {
    marginTop: 10,
    shadowColor: colors.colorBlack,
    shadowOffset: {
      width: 0,
      height: -3
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.84,
    elevation: 3
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  paddingDefault: {
    padding: 20
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'ios' ? 10 : 0,
    borderColor: colors.grdMain,
    borderWidth: 1,
    borderRadius: 10
  },
  roundTop: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  roundBottom: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  redDoth: {
    backgroundColor: colors.colorSecondary,
    width: 12,
    height: 12,
    borderRadius: 6,
    position: 'absolute',
    top: -5,
    right: -5
  }
});

export default styles;
