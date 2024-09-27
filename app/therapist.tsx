import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import Nav from "@/components/nav";
import tw from "twrnc";
import TherapyCard from "@/components/therapyCard";
import therapistsData from "../data/therapist.json";

// Define the type for the therapist data
interface Therapist {
  id: number;
  name: string;
  degree: string;
  image: string;
  rating: number;
}

export default function Therapist() {
  return (
    <View style={tw`bg-slate-900 h-full`}>
      <Nav />
      <View style={tw`bg-slate-900 h-full pt-6 px-6`}>
        <Text style={tw`my-6 font-bold text-white text-2xl`}>
          Help is always near
        </Text>
        <ScrollView>
          {therapistsData.map((therapist: Therapist) => (
            <View key={therapist.id} style={tw`mb-4`}>
              <TherapyCard therapist={therapist} />
            </View>
          ))}
          <View style={tw`h-20 w-full`}></View>
        </ScrollView>
      </View>
    </View>
  );
}
