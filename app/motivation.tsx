import { Text, View, Image, ScrollView } from "react-native";
import tw from "twrnc";
import Header from "@/components/header";

const data = [
  {
    id: 1,
    image: require("../assets/authors/a.jpg"), // path to local image
    quote: `Before her rise to fame, J.K. Rowling faced depression, anxiety, and poverty. After her mother’s death, a failed marriage, and joblessness, she contemplated suicide. However, she sought help and focused on her passion for writing. The result was the Harry Potter series, which transformed her life and inspired millions worldwide. Rowling’s success story serves as a beacon of hope for those struggling with mental health issues, showing that even in the darkest times, there can be a path to success and fulfillment.`,
    author: "J.K. Rowling",
  },
  {
    id: 2,
    image: require("../assets/authors/br.webp"),
    quote: `Born into a Dalit family, Ambedkar faced social discrimination throughout his life. Despite these adversities, he became the principal architect of the Indian Constitution and a champion for social justice, advocating for the rights of the marginalized. His legacy continues to inspire millions fighting for equality and human rights.`,
    author: "B.R Ambedkar",
  },
  {
    id: 3,
    image: require("../assets/authors/steve.jpg"),
    quote: `Steve Jobs, the co-founder of Apple, was once ousted from his own company. Instead of giving up, he took the time to explore new ventures, which eventually led to his triumphant return. His journey emphasizes resilience, creativity, and the belief that setbacks are opportunities in disguise.`,
    author: "Steve Jobs",
  },
  {
    id: 4,
    image: require("../assets/authors/ens.jpg"),
    quote: `Albert Einstein struggled with traditional education and was considered a poor student. Yet, his relentless curiosity and passion for understanding the universe led him to develop the theory of relativity, revolutionizing physics. His story reminds us that brilliance often lies in unconventional paths.`,
    author: "Albert Einstein",
  },
  {
    id: 5,
    image: require("../assets/authors/nelson.webp"),
    quote: `Nelson Mandela spent 27 years in prison fighting against apartheid in South Africa. Upon his release, he became a global symbol of peace and reconciliation. Mandela’s legacy teaches us that forgiveness, resilience, and dedication to a greater cause can transform the world.`,
    author: "Nelson Mandela",
  },
];

export default function Motivation() {
  return (
    <>
      <Header title="Motivation" />
      <ScrollView horizontal={true} style={tw`my-auto mt-10 pl-4 pb-6`}>
        {data.map((item) => (
          <View key={item.id} style={tw`w-85 rounded-xl bg-[#a5d8ff] mr-2`}>
            <Image
              source={item.image}
              style={tw`w-full h-64 rounded-t-xl`}
              resizeMode="cover"
            />
            <Text style={tw`py-4 px-4 text-base font-bold text-center`}>
              {item.quote}
            </Text>
            <Text style={tw`text-center pb-6 text-lg`}>{item.author}</Text>
          </View>
        ))}
        <View style={tw`w-20`} />
      </ScrollView>
    </>
  );
}
