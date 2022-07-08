import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    marginTop: 35,
  },

  styleOne: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    marginTop: 20,
  },

  buttonBox: {
    borderColor: '#fff',
    paddingVertical: 15,
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.lightOrange,
    marginLeft: 5,
    borderRadius: 5,
  },

  buttonBoxTwo: {
    paddingVertical: 15,
    borderColor: '#fff',
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginLeft: 5,
    borderRadius: 5,
  },

  headerBox: {
    marginTop: 30,
  },

  scrollContainer: {
    flex: 1,
  },
});
