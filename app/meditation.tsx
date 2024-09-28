import { Text, View, Image, ScrollView } from "react-native";
import tw from "twrnc";
import Header from "@/components/header";
import Markdown from "react-native-markdown-display";
export default function Meditation() {
  const guide = `## 1. Find a Quiet Space
- Choose a quiet place where you won’t be disturbed.
- Sit comfortably on a chair or cushion with your back straight.


---
## 2. Focus on Your Breath
- Close your eyes and take a few deep breaths.
- Inhale slowly through your nose, hold for a moment, and then exhale gently through your mouth.
- Continue to breathe naturally, focusing on the sensation of your breath entering and leaving your nostrils.
---
## 3. Body Scan
- Bring your attention to your body, starting from your toes and moving up to your head.
- Notice any tension or discomfort in your body. As you breathe out, imagine releasing this tension.
- Continue this body scan, relaxing each part as you move upward.
---
## 4. Mindfulness of Thoughts
- Notice any anxious thoughts that arise. Instead of engaging with them, simply observe them as if they were clouds passing in the sky.
- Acknowledge them without judgment and gently bring your focus back to your breath.
---
## 5. Loving-Kindness Meditation
- Once you feel calm, you can practice loving-kindness meditation.
- Silently repeat phrases like, “May I be happy, may I be healthy, may I be safe, may I be at peace.”
- Extend these wishes to others: loved ones, acquaintances, and even those you find difficult.
---
## 6. Grounding Technique
- If you feel overwhelmed, try grounding yourself by focusing on the physical sensations in your body.
- Feel your feet touching the ground, your hands resting on your knees, or the weight of your body on the chair.
---
## 7. End the Meditation
- Slowly bring your awareness back to the room.
- Open your eyes gently and take a moment to notice how you feel.
---
## 8. Practice Regularly
- Aim to meditate daily, even if it's just for 5-10 minutes. Consistency is key to managing anxiety effectively.
---

`;
  return (
    <>
      <Header title="Meditation" />
      <View style={tw`mt-4 mx-auto`}>
        <ScrollView>
          <Markdown>{guide}</Markdown>
        </ScrollView>
      </View>
    </>
  );
}
