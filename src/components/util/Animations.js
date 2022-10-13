import { StyleSheet } from "aphrodite";
import { pulse } from "react-animations";

const animation = StyleSheet.create({
  pulse: {
    animationName: pulse,
    animationDuration: "0.4s",
    animationIterationCount: 3,
  },
});

export default animation;
