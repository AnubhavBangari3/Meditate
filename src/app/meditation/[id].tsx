import {Text} from 'react-native';
import { useLocalSearchParams,router } from 'expo-router';
import { meditations } from '../../data';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function MeditationDetails(){
          const {id} =useLocalSearchParams<{id:string}>();
          const meditation = meditations.find((m) => m.id === Number(id));

          if (!meditation){
                    return <Text>Meditation not found !</Text>

          }

          return(
                    
                    <>
                    <AntDesign onPress = {() => router.back()} className="absolute top-16 right-10" name="close" size={24} color="black" />
                    <Text className="text-3xl mt-16">Meditation Details : {meditation?.title}</Text>
                    </>
          )
}