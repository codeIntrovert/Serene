import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import tw from "twrnc";
import { Link } from "expo-router";
import { SvgXml } from "react-native-svg";
// Import translations for each language
import en from '../assets/translations/en';
import hi from '../assets/translations/hi';
import ta from '../assets/translations/ta';

type Translations = {
  hello: string;
  welcome: string;
};

const translations: { [key: string]: Translations } = {
  en,
  hi,
  ta,
};

export default function Calender() {
  const [language, setLanguage] = useState('en');  // Default language is English

  // Function to change the language
  const changeLanguage = (lang: React.SetStateAction<string>) => {
    setLanguage(lang);
  };

  const translations: { [key: string]: Translations } = {
    en,
    hi,
    ta,
  };

  return (
    <View style={tw`w-full h-10 bg-[#F8F9FB] mt-12 rounded-xl flex-row px-6`}>
      <Pressable style={tw`my-auto mx-auto`} onPress={() => changeLanguage('hi')}>
        <Text style={tw`font-semibold text-black`}>हिंदी</Text>
      </Pressable>
      <Pressable style={tw`my-auto mx-auto`} onPress={() => changeLanguage('en')}>
        <Text style={tw`font-semibold text-black bg-blue-200 py-2 px-3 rounded-xl`}>English</Text>
      </Pressable>
      <Pressable style={tw`my-auto mx-auto`} onPress={() => changeLanguage('ta')}>
        <Text style={tw`font-semibold text-black`}>தமிழ்</Text>
      </Pressable>
    </View>
    
  );
}
