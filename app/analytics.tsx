import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, Dimensions } from "react-native";
import tw from "twrnc";
import Nav from "@/components/nav";
import { readFile } from "@/components/fileService";
import Header from "@/components/header";
import { LineChart } from "react-native-chart-kit";

// Function to map emotions to numbers for the graph
const mapEmotionToValue = (emotion: string) => {
  switch (emotion) {
    case "sad":
      return 0;
    case "mid":
      return 1;
    case "happy":
      return 2;
    default:
      return 1; // Default to "mid" if unknown
  }
};

// Function to format the date for labels
const formatDateLabel = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.getHours()}:${date.getMinutes()}`;
};

// Function to format the full date and time for the log
const formatFullDate = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};

export default function Analytics() {
  const [fileContent, setFileContent] = useState<string | null>(null); // Use state to store the file content
  const [chartData, setChartData] = useState<{
    labels: string[];
    data: number[];
  }>({
    labels: ["No Data"], // Default label when no data
    data: [0], // Default data when no data
  });
  const [parsedData, setParsedData] = useState<any[]>([]); // Store the parsed data

  // useEffect to read the file after the component mounts
  useEffect(() => {
    const fetchFileContent = async () => {
      try {
        const content: any = await readFile("mood.json"); // Read file asynchronously

        if (content) {
          setFileContent(content); // Set the file content to state

          // Parse the file content (assuming JSON format)
          const parsedData = JSON.parse(content);

          if (parsedData && parsedData.length > 0) {
            // Extract labels (formatted time) and data (mapped emotions)
            const labels = parsedData.map((entry: any) =>
              formatDateLabel(entry.date)
            );
            const data = parsedData.map((entry: any) =>
              mapEmotionToValue(entry.emotion)
            );

            setChartData({ labels, data });
            setParsedData(parsedData); // Store the parsed data
          } else {
            // Handle case when parsedData is empty or not an array
            setChartData({
              labels: ["No Data"],
              data: [0],
            });
            setParsedData([]); // No data found
          }
        } else {
          // Handle case when content is null
          setFileContent("No data available");
          setChartData({
            labels: ["No Data"],
            data: [0],
          });
          setParsedData([]); // No data found
        }
      } catch (error) {
        console.log(error);
        setFileContent("Error loading data"); // Set error state in case of failure
        setChartData({
          labels: ["Error"],
          data: [0],
        });
        setParsedData([]); // No data due to error
      }
    };

    fetchFileContent(); // Invoke the async function
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <>
      <Header title="Analytics" />
      <Nav />
      <View style={tw`bg-[#a5d8ff] h-full px-2`}>
        <ScrollView style={tw`self-center`}>
          {/* Conditionally render the chart if data is available */}
          <Text style={tw`mt-5 text-center font-semibold text-base`}>
            Emotion Over Time
          </Text>
          <LineChart
            data={{
              labels: chartData.labels, // Use parsed labels
              datasets: [
                {
                  data: chartData.data, // Use parsed emotion values
                },
              ],
            }}
            width={Dimensions.get("window").width * 0.9} // from react-native
            height={220}
            yAxisLabel=""
            yAxisSuffix=""
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#006de5",
              backgroundGradientFrom: "#006de5",
              backgroundGradientTo: "#006de5",
              decimalPlaces: 0, // No decimal places since emotion is an integer
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#006de5",
              },
            }}
            bezier
            style={{
              marginVertical: 20,
              borderRadius: 16,
            }}
          />

          {/* Render the Emotions Log */}
          <View
            style={tw`w-full rounded-2xl self-center py-6 bg-[#006de5] mt-5`}
          >
            <Text style={tw`text-center font-semibold mb-4 text-white text-lg`}>
              Your Emotions Log
            </Text>
            {parsedData && parsedData.length > 0 ? (
              parsedData.map((entry: any, index: number) => (
                <View
                  key={index}
                  style={tw`bg-white my-1 mx-4 p-4 rounded-lg shadow-md`}
                >
                  <Text style={tw`font-semibold text-base`}>
                    {formatFullDate(entry.date)}
                  </Text>
                  <Text style={tw`text-gray-500`}>
                    Emotion:{" "}
                    {entry.emotion.charAt(0).toUpperCase() +
                      entry.emotion.slice(1)}
                  </Text>
                </View>
              ))
            ) : (
              <Text style={tw`text-center text-white mt-4`}>No data found</Text>
            )}
          </View>
          <View style={tw`h-30 w-full`}></View>
        </ScrollView>
      </View>
    </>
  );
}
