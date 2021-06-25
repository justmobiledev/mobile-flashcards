import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {DeckList, AddDeck} from '../components';
import colors from '../styles/colors.json';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons'; 

function MainTabBar({ state, descriptors, navigation }) {
    return (
      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={index == 0 ? styles.deckListTabStyle : styles.addDeckTabStyle}
            >
             {
                index == 0 ?
                (<MaterialCommunityIcons name="cards" size={24} color="white" />) : 
                (<EvilIcons name="plus" size={24} color="white" />)
              }
              <Text style={{ marginTop: 8, fontSize: 16, color: isFocused ? '#ffffff' : '#cccccc' }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  const styles = StyleSheet.create({
    deckListTabStyle: {
      flex: 1,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.teal,
    },
    addDeckTabStyle: {
      flex: 1,
      height: 80,
      justifyContent: 'center',
      alignItems: 'center', 
      backgroundColor: colors.orange,
    }
  });
  
  const Tab = createBottomTabNavigator();

  export default function MainTabNavigator() {
    return (
      <Tab.Navigator tabBar={props => <MainTabBar {...props} />}>
      <Tab.Screen name="Decks" component={DeckList} />
      <Tab.Screen name="AddDeck" component={AddDeck} />
    </Tab.Navigator>
    )
  }