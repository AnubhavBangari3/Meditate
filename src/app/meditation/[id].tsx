import {Text,View,Pressable} from 'react-native';
import { useLocalSearchParams,router,Link } from 'expo-router';
import { meditations } from '../../data';
import AntDesign from '@expo/vector-icons/AntDesign';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

export default function MeditationDetails(){
          const {id} =useLocalSearchParams<{id:string}>();
          const meditation = meditations.find((m) => m.id === Number(id));
          const {top}= useSafeAreaInsets();

          if (!meditation){
                    return <Text>Meditation not found !</Text>

          }

          return(
                    
                    <SafeAreaView className="bg-orange-300 flex-1 p-2 items-center justify-between">
                               
                              {/* Header Section with Equal Spacing */}
                              <View className="flex-row items-center justify-between px-6 py-4 w-full">
                              
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

                    <Pressable className="bg-zinc-800 w-25 h-25 self-center p-6 rounded-full">
                    <AntDesign name="play" size={24} color="white" />
                    </Pressable>

                    {/* Header Section with Equal Spacing */}
                    <View className="flex-row items-center justify-between px-6 py-4 w-full">
                    
                    {/* Left Side - Info Icon */}
                    <View className="flex-1 items-start">
                  
                    <Feather name="airplay" size={24} color="black" />
                   
                    </View>

                  

                    {/* Right Side - Close Icon */}
                    <View className="flex-1 items-end">
                    <Entypo name="cog" size={24} color="black" />
                    </View>

                    </View>
                    
                    </SafeAreaView>
          )
}