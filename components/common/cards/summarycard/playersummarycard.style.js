import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  logoContainer: {
    width: 50,
    height: 50,
    borderRadius:5,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  logImage: {
    marginTop: 5,
    width: "110%",
    height: "100%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  jobName: {
    fontSize: SIZES.medium,
    fontFamily: "DMBold",
    color: COLORS.primary,
  },
  summaryStats: {
    fontSize: SIZES.small,
    fontFamily: "DMRegular",
    color: COLORS.gray,
    marginTop: 3,
  },
});

export default styles;
