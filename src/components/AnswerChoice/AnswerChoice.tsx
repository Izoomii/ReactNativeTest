import { Answer } from "../../../config/data";
import { View, StyleSheet, Text } from "react-native";

interface AnswerChoiceProps {
  answer: Answer;
  checked: boolean;
}

export default function AnswerChoice({ answer, checked }: AnswerChoiceProps) {
  return (
    <View style={styles.answer}>
      <View
        style={[
          styles.checkbox,
          { backgroundColor: checked ? "#afa" : "#aaa" },
        ]}
      ></View>
      <View style={styles.label}>
        <Text>{answer.label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  answer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 4,
  },
  checkbox: {
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  label: {
    marginHorizontal: 10,
    fontWeight: "300",
  },
});
