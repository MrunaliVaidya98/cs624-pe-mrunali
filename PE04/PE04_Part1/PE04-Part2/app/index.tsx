import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const profiles = [
  {id:1,name:'Mrunali Vaidya',occupation:'React Native Developer',description:'Mrunali is a software developer who enjoys creating clean, responsive mobile applications.'},
  {id:2,name:'Alex Smith',occupation:'Mobile Developer',description:'Alex enjoys building mobile applications using React Native and JavaScript.'},
  {id:3,name:'Sara Lee',occupation:'Software Engineer',description:'Sara focuses on user-friendly and reliable software applications.'},
  {id:4,name:'John Miller',occupation:'Frontend Developer',description:'John enjoys developing responsive interfaces for web and mobile applications.'},
  {id:5,name:'Priya Shah',occupation:'UI Developer',description:'Priya enjoys designing clean and accessible mobile interfaces.'},
  {id:6,name:'David Brown',occupation:'React Developer',description:'David creates interactive applications with React and React Native.'},
];

export default function App() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Profile Card Gallery</Text>
        <View style={styles.gallery}>
          {profiles.map((p) => {
            const expanded = expandedId === p.id;
            return (
              <TouchableOpacity key={p.id} onPress={() => setExpandedId(expanded ? null : p.id)} activeOpacity={0.8}>
                <View style={[styles.card, expanded ? styles.expandedCard : styles.thumbnailCard]}>
                  <Image source={require('../assets/images/user.png')} style={[styles.image, expanded ? styles.expandedImage : styles.thumbnailImage]} />
                  <Text style={[styles.name, !expanded && styles.smallName]}>{p.name}</Text>
                  <Text style={[styles.occupation, !expanded && styles.smallOccupation]}>{p.occupation}</Text>
                  {expanded && <Text style={styles.description}>{p.description}</Text>}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea:{flex:1,backgroundColor:'#f4f6f8'},
  container:{flexGrow:1,padding:20,alignItems:'center'},
  heading:{fontSize:24,fontWeight:'bold',marginBottom:24},
  gallery:{width:'100%',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',gap:20},
  card:{backgroundColor:'#2997f5',borderWidth:2,borderColor:'#222',borderRadius:18,alignItems:'center',justifyContent:'center',padding:12,shadowColor:'#000',shadowOpacity:.25,shadowRadius:5,shadowOffset:{width:0,height:4},elevation:6},
  thumbnailCard:{width:120,height:170},
  expandedCard:{width:240,height:350},
  image:{borderRadius:100,backgroundColor:'white',borderWidth:2,borderColor:'#222'},
  thumbnailImage:{width:55,height:55},
  expandedImage:{width:100,height:100},
  name:{color:'white',fontWeight:'bold',marginTop:10,textAlign:'center'},
  smallName:{fontSize:11},
  occupation:{color:'white',fontWeight:'600',marginTop:4,textAlign:'center'},
  smallOccupation:{fontSize:9},
  description:{color:'white',marginTop:15,textAlign:'center',lineHeight:20}
});
