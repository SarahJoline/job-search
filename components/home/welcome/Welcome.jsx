import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Image, Pressable, Text, TextInput, View } from 'react-native';
import { SIZES, icons } from '../../../constants';
import styles from './welcome.style';

const jobTypes = ["Full-Time", "Part-Time", "Contract"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState();
  return (
    <View>
        <View style={styles.container}>
      <Text style={styles.userName}>Welcome Sarah</Text>
      <Text style={styles.welcomeMessage}>Find your perfect job</Text>
    </View>

    <View style={styles.searchContainer}>
         <View style={styles.searchWrapper}>
      <TextInput style={styles.searchInput} value="" onChange={() => {}}
      placeholder="search" />
    </View>
    <Pressable style={styles.searchBtn}><Image source={icons.search} resizeMode="contain" style={styles.searchBtnImage}/></Pressable>
    </View>
    <View style={styles.tabsContainer}>
      <FlatList data={jobTypes} renderItem={({item}) =>(<Pressable style={styles.tab(activeJobType, item)} onPress={()=> {setActiveJobType(item)
      router.push(`/search/${item}`)}}><Text style={styles.tabText(activeJobType, item)}>
        {item}</Text></Pressable>)}
        keyExtractor={(item) => item} contentContainerStyle={{columnGap: SIZES.small}}
        horizontal/>
    </View>
    </View>
  )
}

export default Welcome