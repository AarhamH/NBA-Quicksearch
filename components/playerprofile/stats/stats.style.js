import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.tertiary,
    borderRadius: 10,
    marginLeft:-10,
    marginRight:-10
  },

  title: {
    fontSize: SIZES.large,
    color: COLORS.lightWhite,
    fontFamily: FONT.bold,
    marginBottom: 10,
    marginLeft:10,
    marginTop:10
  },
  pointsContainer: {
    marginVertical: SIZES.small,
    margin:40,
    marginBottom:200
  },
  typeText: {
    fontSize: SIZES.medium-1,
    color: COLORS.yellow,
    fontFamily: FONT.bold,
    marginLeft: SIZES.small,
    textDecorationLine: "underline"
  },
  pointText: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray,
    fontFamily: FONT.regular,
    marginLeft: SIZES.small,
    marginBottom:SIZES.large
  },

  label: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '100',
  },
});

export default styles;
