import { StyleSheet } from "react-native";
import { COLORS, FONTS, CONST, SCALE } from "../global/constants.global";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.WHITE,
    padding: 20
  },
  text: {
    fontFamily: FONTS.ITALIC,
    fontSize: 20,
    paddingLeft: 10,
    color: COLORS.RED
  },
  profileImage: {
    borderRadius: 35,
    height: 70,
    width: 70,
    resizeMode:'contain'
  },
  wrapperMain: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  btnStyle: {
    width: CONST.DEVICE_WIDTH - 40,
    backgroundColor: COLORS.CEMENT
  },
  textStyle: {
    color: COLORS.WHITE,
    fontFamily: FONTS.SEMIBOLD,
    fontSize: SCALE.TITLE_TEXT_SIZE
  },
  styleMargin: {
    marginTop: 20
  }
});
