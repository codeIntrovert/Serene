import React, { useState } from "react";
import { Text, View, Pressable, Alert, Image } from "react-native";
import { SvgXml } from "react-native-svg";
import tw from "twrnc";
import { readFile, saveFile } from "@/components/fileService";
import { format } from "date-fns"; // For formatting date/time
export default function Feeling() {
  const mid = `<svg fill="#ffffff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM7 13h6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2z"></path></g></svg>`;
  const happy = `<svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>/svg/ic-smile</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ic-smile" fill-rule="nonzero" fill="#ffffff"> <path d="M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M8,12 C9.1045695,12 10,11.1045695 10,10 C10,8.8954305 9.1045695,8 8,8 C6.8954305,8 6,8.8954305 6,10 C6,11.1045695 6.8954305,12 8,12 Z M16,12 C14.8954305,12 14,11.1045695 14,10 C14,8.8954305 14.8954305,8 16,8 C17.1045695,8 18,8.8954305 18,10 C18,11.1045695 17.1045695,12 16,12 Z M8.29289322,16.7071068 C7.90236893,16.3165825 7.90236893,15.6834175 8.29289322,15.2928932 C8.68341751,14.9023689 9.31658249,14.9023689 9.70710678,15.2928932 C9.70586437,15.2916508 9.73284413,15.3152581 9.7875,15.35625 C9.89702274,15.4383921 10.0337053,15.5238187 10.1972136,15.6055728 C10.6871488,15.8505404 11.2849871,16 12,16 C12.7150129,16 13.3128512,15.8505404 13.8027864,15.6055728 C13.9662947,15.5238187 14.1029773,15.4383921 14.2125,15.35625 C14.2671559,15.3152581 14.2941356,15.2916508 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 C16.0976311,15.6834175 16.0976311,16.3165825 15.7071068,16.7071068 C15.5100371,16.9041765 15.1746812,17.1556934 14.6972136,17.3944272 C13.9371488,17.7744596 13.0349871,18 12,18 C10.9650129,18 10.0628512,17.7744596 9.3027864,17.3944272 C8.82531879,17.1556934 8.48996291,16.9041765 8.29289322,16.7071068 Z" id="Combined-Shape"> </path> </g> </g> </g></svg>`;
  const sad = `<svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>/svg/ic-sad</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ic-sad" fill-rule="nonzero" fill="#ffffff"> <path d="M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M8,12 C9.1045695,12 10,11.1045695 10,10 C10,8.8954305 9.1045695,8 8,8 C6.8954305,8 6,8.8954305 6,10 C6,11.1045695 6.8954305,12 8,12 Z M16,12 C14.8954305,12 14,11.1045695 14,10 C14,8.8954305 14.8954305,8 16,8 C17.1045695,8 18,8.8954305 18,10 C18,11.1045695 17.1045695,12 16,12 Z M8.29289322,16.2928932 C8.48996291,16.0958235 8.82531879,15.8443066 9.3027864,15.6055728 C10.0628512,15.2255404 10.9650129,15 12,15 C13.0349871,15 13.9371488,15.2255404 14.6972136,15.6055728 C15.1746812,15.8443066 15.5100371,16.0958235 15.7071068,16.2928932 C16.0976311,16.6834175 16.0976311,17.3165825 15.7071068,17.7071068 C15.3165825,18.0976311 14.6834175,18.0976311 14.2928932,17.7071068 C14.2941356,17.7083492 14.2671559,17.6847419 14.2125,17.64375 C14.1029773,17.5616079 13.9662947,17.4761813 13.8027864,17.3944272 C13.3128512,17.1494596 12.7150129,17 12,17 C11.2849871,17 10.6871488,17.1494596 10.1972136,17.3944272 C10.0337053,17.4761813 9.89702274,17.5616079 9.7875,17.64375 C9.73284413,17.6847419 9.70586437,17.7083492 9.70710678,17.7071068 C9.31658249,18.0976311 8.68341751,18.0976311 8.29289322,17.7071068 C7.90236893,17.3165825 7.90236893,16.6834175 8.29289322,16.2928932 Z" id="Combined-Shape"> </path> </g> </g> </g></svg>`;
  const [mood, setMood] = useState("");

  const handlePress = async (selectedMood: string) => {
    setMood(selectedMood); // Update the state with selected mood
    const currentTime = format(new Date(), "yyyy-MM-dd HH:mm:ss"); // Get current date and time

    const newMoodData = {
      emotion: selectedMood,
      date: currentTime,
    };

    try {
      // Step 1: Initialize an empty array in case the file is empty or unreadable
      let moodDataArray: Array<{ emotion: string; date: string }> = [];

      // Step 2: Read the existing mood.json file
      const fileContent = await readFile("mood.json");

      // Step 3: If the file content is not empty, try parsing it as JSON
      if (fileContent) {
        try {
          const parsedContent = JSON.parse(fileContent);
          // Check if the parsed content is an array
          if (Array.isArray(parsedContent)) {
            moodDataArray = parsedContent;
          } else {
            console.warn(
              "File content is not an array, resetting to empty array."
            );
          }
        } catch (error) {
          console.error("Error parsing existing file content:", error);
        }
      }

      // Step 4: Add the new mood data to the array
      moodDataArray.push(newMoodData);

      // Step 5: Save the updated array back to mood.json
      await saveFile("mood.json", JSON.stringify(moodDataArray));

      Alert.alert("Mood Saved", `Your mood (${selectedMood}) has been saved.`);

      // Optional: Log the updated mood data
      console.log("Updated mood data:", moodDataArray);
    } catch (error) {
      console.error("Error writing or reading mood file:", error);
    }
  };

  return (
    <View style={tw`w-full h-35 bg-[#F8F9FB] mt-4 rounded-xl p-2`}>
      <Text style={tw`text-center font-semibold mt-4 text-white`}>
        How's your day going?
      </Text>
      <Image
        source={require("../assets/images/sleep.png")} // replace with your local image path
        style={tw` absolute top-2 left-2 -z-100 w-full h-full rounded-xl`}
        resizeMode="cover"
      />
      <View style={tw`flex-row my-auto`}>
        <Pressable
          style={tw`mx-auto my-auto`}
          onPress={() => handlePress("happy")}
        >
          <SvgXml xml={happy} width="45" height="45" />
        </Pressable>

        <Pressable
          style={tw`mx-auto my-auto`}
          onPress={() => handlePress("mid")}
        >
          <SvgXml xml={mid} width="43" height="43" />
        </Pressable>

        <Pressable
          style={tw`mx-auto my-auto`}
          onPress={() => handlePress("sad")}
        >
          <SvgXml xml={sad} width="45" height="45" />
        </Pressable>
      </View>
    </View>
  );
}
