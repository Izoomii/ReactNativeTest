import { View, Text } from "react-native";
import { theme } from "../../../utils/colors";

interface SmallBoxProps {
  text: string;
  textColor: string;
}
export default function SmallBox({ text, textColor }: SmallBoxProps) {
  return (
    <View
      style={{
        backgroundColor: theme["gray_light"],
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
