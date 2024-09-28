import { Text, View, Image } from "react-native";
import tw from "twrnc";
import { Link } from "expo-router";
import { SvgXml } from "react-native-svg";
export default function Mood() {
  return (
    <View style={tw`mt-0 mb-4`}>
      <Text style={tw`text-center text-black font-bold text-base my-4`}>
        Mood Booster
      </Text>
      <View style={tw`w-full h-78 bg-[#F8F9FB] rounded-xl`}>
        {/* First row of images */}
        <View style={tw`w-full h-40 bg-[#F8F9FB] rounded-xl flex-row px-1`}>
          <View
            style={tw`w-48% bg-slate-700 h-90% mx-auto my-auto rounded-xl overflow-hidden`}
          >
            <View style={tw` absolute bottom-4 self-center rounded-lg z-100`}>
              <Text style={tw`py-px px-2 text-base text-white font-bold`}>
                Relax
              </Text>
            </View>
            <Image
              source={require("../assets/images/sleep.png")} // replace with your local image path
              style={tw`w-full h-full`}
              resizeMode="cover"
            />
            <Link
              href="/relax"
              style={tw`absolute z-100 mx-auto my-auto h-full w-full`}
            ></Link>
            <SvgXml
              style={tw`absolute top-7 left-11 mx-auto my-auto`}
              xml={`<svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> <title>ic_fluent_sleep_24_regular</title> <desc>Created with Sketch.</desc> <g id="🔍-Product-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="ic_fluent_sleep_24_regular" fill="#ffffff" fill-rule="nonzero"> <path d="M13.3781495,3.02627004 C14.779805,3.10147064 16.149163,3.50410122 17.3909629,4.22105476 C21.6974574,6.70741052 23.1729714,12.2141037 20.6866157,16.5205982 C18.2002599,20.8270927 12.6935667,22.3026067 8.3870722,19.816251 C7.21429924,19.1391502 6.22701603,18.2231567 5.47505644,17.131213 C5.22364766,16.7661345 5.38627313,16.2619451 5.80361746,16.1125718 C9.19524384,14.8986623 11.0117729,13.4919345 12.0658683,11.4798042 C13.1755714,9.36152598 13.4623464,7.04116721 12.686045,3.86058421 C12.5786994,3.42077884 12.9260836,3.00201612 13.3781495,3.02627004 Z M14.3891573,4.66388166 L14.4540113,5.05331386 C14.8713455,7.75842642 14.5191162,10.02929 13.3945824,12.1758781 C12.2526695,14.3556406 10.3942579,15.8798368 7.37870364,17.1155876 C7.88685386,17.6645675 8.47754548,18.1364349 9.1370722,18.5172128 C12.7261278,20.5893551 17.3154354,19.3596538 19.3875776,15.7705982 C21.4597198,12.1815426 20.2300185,7.59223507 16.6409629,5.52009286 C16.135627,5.22833704 15.6042431,4.99836968 15.0554727,4.83232165 L14.7241935,4.7403802 L14.3891573,4.66388166 Z M10.993659,3.65321253 L11,3.75191881 L11,9 C11,10.1045695 10.1045695,11 9,11 C7.8954305,11 7,10.1045695 7,9 C7,7.8954305 7.8954305,7 9,7 C9.17301792,7 9.34090449,7.02196989 9.50102216,7.06327212 L9.5,4.76403308 L6,5.82884273 L6,10 C6,11.1045695 5.1045695,12 4,12 C2.8954305,12 2,11.1045695 2,10 C2,8.8954305 2.8954305,8 4,8 C4.17301792,8 4.34090449,8.02196989 4.50102216,8.06327212 L4.5,5.27307544 C4.5,4.97962582 4.67056199,4.71684935 4.93028762,4.59459192 L5.03170529,4.55554675 L10.0317053,3.03439012 C10.4492719,2.90735328 10.8703533,3.16118921 10.9752183,3.55896965 L10.993659,3.65321253 L10.993659,3.65321253 Z" id="🎨-Color"> </path> </g> </g> </g></svg>`}
              width="65"
              height="65"
            />
          </View>
          <View
            style={tw`w-48% bg-slate-700 h-90% mx-auto my-auto rounded-xl overflow-hidden`}
          >
            <View style={tw` absolute bottom-4 self-center rounded-lg z-100`}>
              <Text style={tw`py-px px-2 text-base text-white font-bold`}>
                Meditation
              </Text>
            </View>
            <Image
              source={require("../assets/images/meditation.png")} // replace with your local image path
              style={tw`w-full h-full`}
              resizeMode="cover"
            />
            <Link
              href="/meditation"
              style={tw`absolute z-100 mx-auto my-auto h-full w-full`}
            ></Link>
            <SvgXml
              style={tw`absolute top-6 left-12 mx-auto my-auto`}
              xml={`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.5714 15.0036L15.4286 16.8486C15.4286 16.8486 19.2857 17.6678 19.2857 19.6162C19.2857 21 17.5714 21 17.5714 21H13L10.75 19.75" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.42864 15.0036L8.5715 16.8486C8.5715 16.8486 4.71436 17.6678 4.71436 19.6162C4.71436 21 6.42864 21 6.42864 21H8.50007L10.7501 19.75L13.5001 18" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 15.9261C3 15.9261 5.14286 15.4649 6.42857 15.0036C7.71429 8.54595 11.5714 9.00721 12 9.00721C12.4286 9.00721 16.2857 8.54595 17.5714 15.0036C18.8571 15.4649 21 15.9261 21 15.9261" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`}
              width="65"
              height="65"
            />
          </View>
        </View>

        {/* Second row of images */}
        <View
          style={tw`w-full -mt-2 h-40 bg-[#F8F9FB] rounded-xl flex-row px-1`}
        >
          <View
            style={tw`w-48% bg-slate-700 h-90% mx-auto my-auto rounded-xl overflow-hidden`}
          >
            <View style={tw` absolute bottom-4 self-center rounded-lg z-100`}>
              <Text style={tw`py-px px-2 text-base text-white font-bold`}>
                Motivation
              </Text>
            </View>
            <Image
              source={require("../assets/images/motivation.png")} // replace with your local image path
              style={tw`w-full h-full`}
              resizeMode="cover"
            />
            <Link
              href="/motivation"
              style={tw`absolute z-100 mx-auto my-auto h-full w-full`}
            ></Link>
            <SvgXml
              style={tw`absolute top-6 left-12 mx-auto my-auto`}
              xml={`<svg fill="#ffffff" viewBox="-48 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M272 96c26.51 0 48-21.49 48-48S298.51 0 272 0s-48 21.49-48 48 21.49 48 48 48zM113.69 317.47l-14.8 34.52H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h77.45c19.25 0 36.58-11.44 44.11-29.09l8.79-20.52-10.67-6.3c-17.32-10.23-30.06-25.37-37.99-42.61zM384 223.99h-44.03l-26.06-53.25c-12.5-25.55-35.45-44.23-61.78-50.94l-71.08-21.14c-28.3-6.8-57.77-.55-80.84 17.14l-39.67 30.41c-14.03 10.75-16.69 30.83-5.92 44.86s30.84 16.66 44.86 5.92l39.69-30.41c7.67-5.89 17.44-8 25.27-6.14l14.7 4.37-37.46 87.39c-12.62 29.48-1.31 64.01 26.3 80.31l84.98 50.17-27.47 87.73c-5.28 16.86 4.11 34.81 20.97 40.09 3.19 1 6.41 1.48 9.58 1.48 13.61 0 26.23-8.77 30.52-22.45l31.64-101.06c5.91-20.77-2.89-43.08-21.64-54.39l-61.24-36.14 31.31-78.28 20.27 41.43c8 16.34 24.92 26.89 43.11 26.89H384c17.67 0 32-14.33 32-32s-14.33-31.99-32-31.99z"></path></g></svg>`}
              width="60"
              height="60"
            />
          </View>
          <View
            style={tw`w-48% bg-slate-700 h-90% mx-auto my-auto rounded-xl overflow-hidden`}
          >
            <View style={tw` absolute bottom-4 self-center rounded-lg z-100`}>
              <Text style={tw`py-px px-2 text-base text-white font-bold`}>
                Journal
              </Text>
            </View>
            <Image
              source={require("../assets/images/sleep.png")} // replace with your local image path
              style={tw`w-full h-full`}
              resizeMode="cover"
            />
            <Link
              href="/journal"
              style={tw`absolute z-100 mx-auto my-auto h-full w-full`}
            ></Link>
            <SvgXml
              style={tw`absolute top-6 left-12 mx-auto my-auto`}
              xml={`<svg viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.5 9.75C16.9142 9.75 17.25 9.41421 17.25 9C17.25 8.58579 16.9142 8.25 16.5 8.25V9.75ZM10.5 8.25C10.0858 8.25 9.75 8.58579 9.75 9C9.75 9.41421 10.0858 9.75 10.5 9.75V8.25ZM16.5 12.75C16.9142 12.75 17.25 12.4142 17.25 12C17.25 11.5858 16.9142 11.25 16.5 11.25V12.75ZM10.5 11.25C10.0858 11.25 9.75 11.5858 9.75 12C9.75 12.4142 10.0858 12.75 10.5 12.75V11.25ZM13.5 15.75C13.9142 15.75 14.25 15.4142 14.25 15C14.25 14.5858 13.9142 14.25 13.5 14.25V15.75ZM10.5 14.25C10.0858 14.25 9.75 14.5858 9.75 15C9.75 15.4142 10.0858 15.75 10.5 15.75V14.25ZM7.5 14.75C7.91421 14.75 8.25 14.4142 8.25 14C8.25 13.5858 7.91421 13.25 7.5 13.25V14.75ZM6.5 13.25C6.08579 13.25 5.75 13.5858 5.75 14C5.75 14.4142 6.08579 14.75 6.5 14.75V13.25ZM4.5 13.25C4.08579 13.25 3.75 13.5858 3.75 14C3.75 14.4142 4.08579 14.75 4.5 14.75V13.25ZM6.5 14.75C6.91421 14.75 7.25 14.4142 7.25 14C7.25 13.5858 6.91421 13.25 6.5 13.25V14.75ZM7.5 10.75C7.91421 10.75 8.25 10.4142 8.25 10C8.25 9.58579 7.91421 9.25 7.5 9.25V10.75ZM6.5 9.25C6.08579 9.25 5.75 9.58579 5.75 10C5.75 10.4142 6.08579 10.75 6.5 10.75V9.25ZM4.5 9.25C4.08579 9.25 3.75 9.58579 3.75 10C3.75 10.4142 4.08579 10.75 4.5 10.75V9.25ZM6.5 10.75C6.91421 10.75 7.25 10.4142 7.25 10C7.25 9.58579 6.91421 9.25 6.5 9.25V10.75ZM5.75 10C5.75 10.4142 6.08579 10.75 6.5 10.75C6.91421 10.75 7.25 10.4142 7.25 10H5.75ZM6.5 15H5.75H6.5ZM7.25 14C7.25 13.5858 6.91421 13.25 6.5 13.25C6.08579 13.25 5.75 13.5858 5.75 14H7.25ZM7.25 10C7.25 9.58579 6.91421 9.25 6.5 9.25C6.08579 9.25 5.75 9.58579 5.75 10H7.25ZM5.75 14C5.75 14.4142 6.08579 14.75 6.5 14.75C6.91421 14.75 7.25 14.4142 7.25 14H5.75ZM16.5 8.25H10.5V9.75H16.5V8.25ZM16.5 11.25H10.5V12.75H16.5V11.25ZM13.5 14.25H10.5V15.75H13.5V14.25ZM7.5 13.25H6.5V14.75H7.5V13.25ZM4.5 14.75H6.5V13.25H4.5V14.75ZM7.5 9.25H6.5V10.75H7.5V9.25ZM4.5 10.75H6.5V9.25H4.5V10.75ZM7.25 10V9H5.75V10H7.25ZM7.25 9C7.25 7.20507 8.70507 5.75 10.5 5.75V4.25C7.87665 4.25 5.75 6.37665 5.75 9H7.25ZM10.5 5.75H16.5V4.25H10.5V5.75ZM16.5 5.75C18.2949 5.75 19.75 7.20507 19.75 9H21.25C21.25 6.37665 19.1234 4.25 16.5 4.25V5.75ZM19.75 9V15H21.25V9H19.75ZM19.75 15C19.75 16.7949 18.2949 18.25 16.5 18.25V19.75C19.1234 19.75 21.25 17.6234 21.25 15H19.75ZM16.5 18.25H10.5V19.75H16.5V18.25ZM10.5 18.25C8.70507 18.25 7.25 16.7949 7.25 15H5.75C5.75 17.6234 7.87665 19.75 10.5 19.75V18.25ZM7.25 15V14H5.75V15H7.25ZM5.75 10V14H7.25V10H5.75Z" fill="#ffffff"></path> </g></svg>`}
              width="65"
              height="65"
            />
          </View>
        </View>
      </View>
    </View>
  );
}
