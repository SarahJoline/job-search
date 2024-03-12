import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

import styles from './popularjobcard.style'

const PopularJobCard = ({item, selectedJob}) => {
  return (
    <Pressable style={styles.container(selectedJob, item)}>
      <Pressable style={styles.logoContainer(selectedJob, item)}><Image source={{uri: item.employer_logo}} resizeMode='contain' style={styles.logoImage}/></Pressable>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <View style={styles.infoWrapper}>
          <Text style={styles.publisher(selectedJob, item)}>
            {item?.job_publisher} -
          </Text>
          <Text style={styles.location}> {item.job_country}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default PopularJobCard