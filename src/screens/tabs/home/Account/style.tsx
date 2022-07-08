import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants/color';

export const styles = StyleSheet.create({
  contaioner: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  contaionerBox: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginHorizontal: 30,
    marginTop: 20,
  },
  contaionerBoxView: {
    marginHorizontal: 50,
    marginTop: 15,
  },
  contaionerBoxText: {
    fontWeight: '500',
    fontSize: 20,
    color: COLORS.white,
  },
  sectionBoxView: {},
  contaionerBoxView1: {
    marginHorizontal: 40,
    marginTop: 25,
  },
  sectionText: {
    fontSize: 13,
    fontWeight: '500',
    color: COLORS.grey4,
  },
  sectionContainer: {
    flexDirection: 'row',
    marginHorizontal: 50,
    marginTop: 15,
  },
  sectionContainerText: {
    fontWeight: '500',
    fontSize: 20,
    color: COLORS.white,
    marginLeft: 15,
  },

  editProfile: {
    fontSize: 12,
    color: COLORS.white,
    marginLeft: 40,
    marginTop: 20,
  },
});
