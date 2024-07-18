import { Text, useWindowDimensions } from "react-native";

import { s } from "./Txt.style";

export function Txt({ children, style }) {
  const { height } = useWindowDimensions();
  const fontSize = style?.fontSize || s.text.fontSize;
  const ratio = 1 / height;
  return (
    <Text style={[s.text, style, { fontSize: fontSize * ratio * height }]}>
      {children}
    </Text>
  );
}
