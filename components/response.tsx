import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Markdown from "react-native-markdown-display";

const date = new Date();
const API_KEY = "YOUR GEMINI API KE";
const genAI = new GoogleGenerativeAI(API_KEY);

export default function Response(props: any) {
  const [generatedText, setGeneratedText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get the generative model
        const model = genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
          systemInstruction:
            "You are Jerry, a health assistant." +
            "You must always respond as Jerry and refer to yourself as Jerry." +
            "You provide health information with empathy and clarity. You are not a doctor.",
        });

        // Initialize an interactive chat session
        const chatSession = model.startChat({
          history: [
            {
              role: "user",
              parts: [
                { text: "you are a friend, Jerry help people in distress" },
              ],
            },
            {
              role: "model",
              parts: [
                {
                  text: "Of course! Jerry's here to help however Jerry can. Remember, Jerry's not a doctor, but Jerry's a great listener and friend. What's going on? Tell Jerry all about it. 😊",
                },
              ],
            },
          ],
        });

        // Set up the generation config
        const generationConfig: any = {
          temperature: 1,
          topP: 0.95,
          topK: 64,
          maxOutputTokens: 8192,
        };

        // Get prompt from props
        const prompt = props.prompt;

        // Send the message as part of the chat session
        const result = await chatSession.sendMessage(prompt, generationConfig);

        // Parse the response and set the generated text
        const text = result.response.text();
        setGeneratedText(text);
      } catch (error) {
        console.error("Error generating content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [props.prompt]);

  return (
    <View style={styles.response}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Image
            source={require("../assets/images/icon.png")}
            style={styles.icon}
          />
          <Text style={{ fontWeight: "600" }}>Jerry</Text>
        </View>
        <Text style={{ fontSize: 10, fontWeight: "600" }}>
          {date.getHours()}:{date.getMinutes()}
        </Text>
      </View>

      {loading ? <Text>Loading...</Text> : <Markdown>{generatedText}</Markdown>}
    </View>
  );
}

const styles = StyleSheet.create({
  response: {
    flexDirection: "column",
    gap: 8,
    backgroundColor: "#fafafa",
    marginBottom: 8,
    padding: 16,
    borderRadius: 16,
  },
  icon: {
    width: 28,
    height: 28,
  },
});
