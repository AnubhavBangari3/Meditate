import {Text} from 'react-native';
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
                    
                    <SafeAreaView>
                    <Link href="../">
                    <AntDesign onPress = {() => router.back()} style={{top:top+10}} className="absolute top-16 right-10" name="close" size={24} color="black" />
                    <Text className="text-3xl mt-16">Meditation Details : {meditation?.title}</Text>
                    </Link>
                    
                    </SafeAreaView>
          )
}