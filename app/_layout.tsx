import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          // Hide the header for this route
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="chat"
        options={{
          // Hide the header for this route
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="therapist"
        options={{
          // Hide the header for this route
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="analytics"
        options={{
          // Hide the header for this route
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="journal"
        options={{
          // Hide the header for this route
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="motivation"
        options={{
          // Hide the header for this route
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="meditation"
        options={{
          // Hide the header for this route
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="relax"
        options={{
          // Hide the header for this route
          headerShown: false,
        }}
      />
    </Stack>
  );
}
