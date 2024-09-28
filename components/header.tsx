import { Text, View } from "react-native";
import tw from "twrnc";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <>
      <View style={tw`w-full top-0 bg-[#006de5] h-23`}>
        <Text style={tw`mt-11 mx-auto font-bold text-xl text-white`}>
          {title}
        </Text>
      </View>
    </>
  );
}
