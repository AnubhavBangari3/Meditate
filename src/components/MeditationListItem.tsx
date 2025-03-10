import  {Text , View, FlatList} from 'react-native';
import { Meditation } from '../types';
import "../../global.css"
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

export function MeditationListItem({meditation}:{meditation :Meditation}){

     

         return (
         <View className="flex-row items-center gap-5">
          <View className="bg-green-700 p-1 rounded-full">
           <Entypo name="check" size={16} color="white" />
          </View>
           <View className="flex-1 p-5 py-10 border-2 border-gray-300 rounded-2xl">
                              <Text className="font-semibold text-4xl">
                    {meditation.title}   
                    </Text>
                    <View className="flex-row items-center gap-1">
                                        <AntDesign name="clockcircleo" size={16} color="dingray" />
                                        <Text className="text-gray-600"> {meditation.duration} min </Text>
                    </View>

            </View>
         </View>
         )
}