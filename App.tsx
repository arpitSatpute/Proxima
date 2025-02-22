import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import Home from './components/Home';
import MentorSearch from './components/mentor/MentorSearch';
import JobSearch from './components/job/JobSearch';
import StudentProfile from './components/student/StudentProfile';
import Icon from 'react-native-vector-icons/Ionicons'; // Importing Ionicons
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          tabBarActiveTintColor: '#059669',
          tabBarInactiveTintColor: 'lightgray',
          tabBarStyle: { backgroundColor: '#111820' },
          headerStyle: {
            backgroundColor: '#111820',
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            color: '#fff',
          },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={Home}
          options={{
            tabBarIcon: ({ color }) => <Icon name="home" size={22} color={color} />,
          }}
        />
        <Tab.Screen 
          name="Mentor" 
          component={MentorSearch}
          options={{
            tabBarIcon: ({ color }) => <Icon name="person" size={22} color={color} />,
          }}
        />
        <Tab.Screen 
          name="Jobs" 
          component={JobSearch}
          options={{
            tabBarIcon: ({ color }) => <Icon name="briefcase" size={22} color={color} />,
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={StudentProfile}
          options={{
            tabBarIcon: ({ color }) => <Icon name="person-circle" size={24} color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}