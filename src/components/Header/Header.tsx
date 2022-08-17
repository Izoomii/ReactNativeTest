import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { useQuestionModal } from "../../../store/global/modal";
import { theme } from "../../../utils/colors";

import SmallBox from "../SmallBox/SmallBox";

export default function Header() {
  const showingResults = useQuestionModal((state) => state.showingResults);
  const currentQuestionIndex = useQuestionModal(
    (state) => state.currentQuestionIndex
  );
  const [timePassed, setTimePassed] = useState(0);

  useEffect(() => {
    const initialTime = Math.floor(new Date().getTime() / 1000);

    const countingSeconds = setInterval(() => {
      const currentTime = Math.floor(new Date().getTime() / 1000);
      setTimePassed(currentTime - initialTime);
    }, 1000);

    return () => clearInterval(countingSeconds);
  }, []);

  return (
    <View style={styles.header}>
      <View style={[styles.userinfo, styles.center]}>
        <View style={{ width: "80%", height: "50%" }}>
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ width: 50, height: 50, borderRadius: 10 }}
              source={require("../../../assets/default-0.png")}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "800", fontSize: 20, color: "white" }}>
              Hi, User name
            </Text>
            <Text style={{ fontWeight: "300" }}>
              Lorem ipsum dolor sit amet
            </Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.questionsinfo,
          { display: showingResults ? "none" : "flex" },
        ]}
      >
        <View style={styles.center}>
          <Text>Question</Text>
          <SmallBox
            text={`${currentQuestionIndex + 1}/20`}
            textColor={theme["purple"]}
          />
        </View>
        <View style={[styles.center, { width: "40%" }]}>
          <Text>Temps écoulé</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <SmallBox
              text={`${String(Math.floor(timePassed / 60)).padStart(2, "0")}`}
              textColor={theme["purple"]}
            />
            <SmallBox
              text={`${String(timePassed % 60).padStart(2, "0")}`}
              textColor={theme["orange"]}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const borderRadius = 40;

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    height: "35%",
    width: "100%",
  },
  userinfo: {
    elevation: 10,
    backgroundColor: theme["blue_light"],
    width: "100%",
    height: "85%",
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  },
  questionsinfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    borderRadius: 30,
    bottom: 0,
    width: "80%",
    height: "30%",
    backgroundColor: "#fff",
    zIndex: 100,
    elevation: 10,
  },
});
