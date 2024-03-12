import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-web';
import { COLORS, SIZES } from '../../../constants';
import useFetch from '../../../hook/useFetch';
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import styles from './popularjobs.style';


const Popularjobs = () => {
  const {isLoading, error, data } = useFetch('search', {
    query: 'React Developer'
  });

  return (
    <View style={styles.container}>
       <View style={styles.header}>
      <Text style={styles.headerTitle}>Popularjobs</Text>
      <Pressable>
        <Text style={styles.headerBtn}>Show all</Text>
      </Pressable>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? <ActivityIndicator size="large" color={COLORS.primary}/> : error ? <Text>Something went wrong.</Text> : <FlatList data={data} renderItem={({item}) =>  (<PopularJobCard item={item}/>)}
      keyExtractor={item => item?.job_id}
      contentContainerStyle={{columnGap: SIZES.medium}}
      horizontal
      />}
      </View>
    </View>
  )
}

export default Popularjobs