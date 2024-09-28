import { Text, View, Image, TouchableOpacity, Linking } from "react-native";
import tw from "twrnc";
import { SvgXml } from "react-native-svg";

export default function TherapyCard({ therapist }: any) {
  const svgOverrideContent = `<svg fill="#f4ee34" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#f4ee34"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1915.918 737.475c-10.955-33.543-42.014-56.131-77.364-56.131h-612.029l-189.063-582.1v-.112C1026.394 65.588 995.335 43 959.984 43c-35.237 0-66.41 22.588-77.365 56.245L693.443 681.344H81.415c-35.35 0-66.41 22.588-77.365 56.131-10.955 33.544.79 70.137 29.478 91.03l495.247 359.831-189.177 582.212c-10.955 33.657 1.13 70.25 29.817 90.918 14.23 10.278 30.946 15.487 47.66 15.487 16.716 0 33.432-5.21 47.775-15.6l495.134-359.718 495.021 359.718c28.574 20.781 67.087 20.781 95.662.113 28.687-20.668 40.658-57.261 29.703-91.03l-189.176-582.1 495.36-359.83c28.574-20.894 40.433-57.487 29.364-91.03" fill-rule="evenodd"></path> </g></svg>`;

  // Function to dynamically generate stars based on rating
  const renderStars = (rating: any) => {
    return Array.from({ length: rating }, (_, index) => (
      <SvgXml
        key={index}
        style={tw`mx-0.5`}
        xml={svgOverrideContent}
        width="12"
        height="12"
      />
    ));
  };

  // Function to handle WhatsApp link
  const handleConnectPress = () => {
    const message = `Hello ${therapist.name}, here from There4U`;
    const phoneNumber = therapist.number; // Use therapist's WhatsApp number
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          alert("WhatsApp is not installed on your device");
        }
      })
      .catch((err) => console.error("An error occurred", err));
  };

  return (
    <View style={tw`h-45 rounded-2xl w-full bg-white`}>
      <View style={tw`flex-row w-full p-2`}>
        <Image
          source={{ uri: therapist.image }}
          style={tw`border-2 border-slate-800 absolute left-4 top-6 bg-green-400 w-18 h-18 rounded-full`}
        />
        <View style={tw`left-25 top-5`}>
          <Text style={tw`text-2xl font-bold text-black`}>
            {therapist.name}
          </Text>
          <Text style={tw`text-sm font-semibold ml-px text-slate-600`}>
            Therapist [{therapist.degree}]
          </Text>
          <View style={tw`flex-row mt-2 ml-px`}>
            {renderStars(therapist.rating)}
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={tw`w-full absolute bg-[#006de5] h-10 bottom-0 rounded-b-xl flex-row`}
        onPress={handleConnectPress} // Add onPress to the button
      >
        <Text
          style={tw`my-auto mx-auto font-semibold text-sm tracking-wide text-white`}
        >
          Connect with {therapist.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
