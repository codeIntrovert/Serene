import { Text, View, Image, ScrollView } from "react-native";
import tw from "twrnc";
import Feeling from "@/components/feeling";
import Calender from "@/components/calender";
import Achievements from "@/components/achievements";
import Mood from "@/components/mood";
import Quote from "@/components/quote";
import Nav from "@/components/nav";
import Greet from "@/components/greet";
import * as Notifications from "expo-notifications"; // Import the Notifications library
import { useEffect } from "react"; // Import useEffect for side effects
import { Platform } from "react-native"; // Import Platform for platform-specific code

export default function Index() {
  const username = "Buddy";
  const profileImageUri = "https://picsum.photos/seed/696/3000/2000";

  // Function to request notification permissions
  const requestPermissions = async () => {
    if (Platform.OS === "android") {
      await Notifications.requestPermissionsAsync();
    }
  };

  // Function to schedule a notification with a custom title and message
  const scheduleNotification = async (
    hour: number,
    minute: number,
    title: string,
    message: string
  ) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: title, // Use custom title
        body: message, // Use custom message
      },
      trigger: {
        hour: hour,
        minute: minute,
        repeats: true, // Set to true to repeat daily
      },
    });
  };

  // Function to schedule daily notifications with custom titles
  const scheduleDailyNotifications = async () => {
    await scheduleNotification(8, 0, "Good Morning", "Great day ahead");
    await scheduleNotification(14, 0, "Afternoon Check", "Halfway through");
    await scheduleNotification(
      20,
      0,
      "Evening Reflection",
      "Jerry wants to know about your day"
    );
    await scheduleNotification(22, 0, "End of Day", "It was a great adventure");
  };

  useEffect(() => {
    requestPermissions();
    scheduleDailyNotifications();
  }, []);

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  return (
    <>
      <View style={tw`bg-[#a5d8ff] h-8 px-6`}></View>
      <Nav />
      <ScrollView>
        <View style={tw`bg-[#a5d8ff] h-full px-6`}>
          <Greet usernameProp={username} />
          <Calender />
          <Feeling />
          <Achievements />
          <Mood />
          <Quote />
        </View>
      </ScrollView>
    </>
  );
}
