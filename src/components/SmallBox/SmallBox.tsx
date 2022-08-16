import { View, Text } from "react-native";
import { gray_light } from "../../../utils/colors";

interface SmallBoxProps {
  text: string;
  textColor: string;
}
export default function SmallBox({ text, textColor }: SmallBoxProps) {
  return (
    <View
      style={{
        backgroundColor: gray_light,
        padding: 15,
        margin: 4,
        borderRadius: 5,
      }}
    >
      <Text
        style={{
          color: textColor,
          fontWeight: "bold",
          fontSize: 20,
        }}
      >
        {text}
      </Text>
    </View>
  );
}
