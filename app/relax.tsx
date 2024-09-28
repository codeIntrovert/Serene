import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import tw from "twrnc";
import Header from "@/components/header";

const videoData = [
  {
    id: 1,
    videoId: "7Zw9qUC4a3k",
    title: "528Hz Reduce Anxiety",
  },
  {
    id: 2,
    videoId: "kw9F5WiY4P0",
    title: "Reduce Stress & Enhance Sleep",
  },
  {
    id: 3,
    videoId: "4nRIWhEL_CI",
    title: "Stress Reduction Music",
  },
];

export default function relax() {
  return (
    <>
      <Header title="Relax" />
      <ScrollView style={tw`my-auto self-center mt-10 px-4 pb-6`}>
        {videoData.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={tw`w-85 rounded-xl bg-[#a5d8ff] mb-2`}
            onPress={() => {
              Linking.openURL(
                `https://www.youtube.com/watch?v=${item.videoId}`
              );
            }}
          >
            <Image
              source={{
                uri: `https://img.youtube.com/vi/${item.videoId}/0.jpg`,
              }}
              style={tw`w-full h-64 rounded-t-xl`}
              resizeMode="cover"
            />
            <Text style={tw`py-4 px-4 text-base font-bold text-center`}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
}
