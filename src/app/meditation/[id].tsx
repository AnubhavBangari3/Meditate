import {Text,View,Pressable} from 'react-native';
import { useLocalSearchParams,router,Link } from 'expo-router';
import { meditations } from '../../data';
import AntDesign from '@expo/vector-icons/AntDesign';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

export default function MeditationDetails(){
          const {id} =useLocalSearchParams<{id:string}>();
          const meditation = meditations.find((m) => m.id === Number(id));
          const {top}= useSafeAreaInsets();

          if (!meditation){
                    return <Text>Meditation not found !</Text>

          }

          return(
                    
                    <SafeAreaView className="bg-orange-300 flex-1 p-2 items-center">
                               
                               <View className="flex-row items-center justify-between p-10">
                                        {/* Left Side - Info Icon */}
                                        <Link href="../">
                                        <AntDesign name="infocirlceo" size={24} color="black" />
                                        </Link>

                                        {/* Center - Text */}
                                        <Text><b>Today's Meditation</b></Text>

                                        {/* Right Side - Close Icon */}
                                        <AntDesign onPress={() => router.back()} name="close" size={24} color="black" />
                              </View>

                    <Text className="text-3xl mt-16 text-center text-zinc-800 font-semibold">Meditation Details : {meditation?.title}</Text>

                    <Pressable className="bg-zinc-800 w-25 h-25 self-center p-6 rounded-full">
                    <AntDesign name="play" size={24} color="white" />
                    </Pressable>
                    
                    </SafeAreaView>
          )
}