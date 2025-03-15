import {Text,View,Pressable} from 'react-native';
import { useLocalSearchParams,router,Link } from 'expo-router';
import { meditations } from '../../data';
import AntDesign from '@expo/vector-icons/AntDesign';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import Slider from '@react-native-community/slider';


import { useAudioPlayer,useAudioPlayerStatus } from 'expo-audio';

const audioFile = require('../../../assets/meditations/audio1.mp3');

export default function MeditationDetails(){
          const {id} =useLocalSearchParams<{id:string}>();
          const meditation = meditations.find((m) => m.id === Number(id));
          const {top}= useSafeAreaInsets();
          const player = useAudioPlayer(audioFile);
          const status=useAudioPlayerStatus(player);

          if (!meditation){
                    return <Text>Meditation not found !</Text>

          }

          return(
                    
                    <SafeAreaView className="bg-orange-300 flex-1 p-2 items-center justify-between">
                               
                              {/* Header Section with Equal Spacing */}
                              <View className="bg-yellow-200 flex-row items-center justify-between px-6 py-4 w-full">
                              
                                        {/* Left Side - Info Icon */}
                                        <View className="flex-1 items-start">
                                        <Link href="../">
                                        <AntDesign name="infocirlceo" size={24} color="black" />
                                        </Link>
                                        </View>

                                        {/* Center - Text */}
                                        <View className="flex-1 items-center">
                                        <Text className="font-bold text-lg">Today's Meditation</Text>
                                        </View>

                                        {/* Right Side - Close Icon */}
                                        <View className="flex-1 items-end">
                                        <AntDesign onPress={() => router.back()} name="close" size={24} color="black" />
                                        </View>

                              </View>

                    <Text className="text-3xl mt-16 text-center text-zinc-800 font-semibold">Meditation Details : {meditation?.title}</Text>

                    <Pressable onPress={() => {player.playing ? player.pause() : player.play()}} className="bg-zinc-800 w-25 h-25 self-center p-6 rounded-full">
                    <AntDesign name={status.playing ? 'pause' :'play'} size={24} color="white" />
                    </Pressable>

                    {/* Header Section with Equal Spacing */}
                    <View className="bg-yellow-200 flex-row items-center justify-between px-6 w-full">
                    
                              {/* Left Side - Info Icon */}
                              <View className="flex-1 items-start">
                    
                              <Feather name="airplay" size={24} color="black" />
                    
                              </View>

                    

                              {/* Right Side - Close Icon */}
                              <View className="flex-1 items-end">
                              <Entypo name="cog" size={24} color="black" />
                              </View>

                             

                    </View>
                   
                    <View className="w-full">
                              {/* Progress Bar */}
                              {/* <View className="bg-zinc-400 h-4 w-full"></View> */}

                              <Slider
                              style={{width:'100%', height: 40}}
                              value={0.5}
                              onSlidingComplete={(value) => console.log(value)}
                              minimumValue={0}
                              maximumValue={1}
                              minimumTrackTintColor="#FFFFFF"
                              maximumTrackTintColor="#000000"
                              />

                              {/* Time Indicators */}
                              <View className="flex-row items-center justify-between w-full">
                              {/* Left Side - Start Time */}
                              <View className="flex-1 items-start">
                              <Text className="text-left font-bold">01:11</Text>
                              </View>

                              {/* Right Side - End Time */}
                              <View className="flex-1 items-end">
                              <Text className="text-right font-bold">11:11</Text>
                              </View>
                              </View>
                    </View>
                    
                    </SafeAreaView>
          )
}