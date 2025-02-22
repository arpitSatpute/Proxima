import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons'; 

import Home from './components/Home';
import MentorSearch from './components/mentor/MentorSearch';
import JobSearch from './components/job/JobSearch';
import StudentProfile from './components/student/StudentProfile';
import Chat from './components/Chat/Chat';
import Dash from './components/Dash';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: true,
      tabBarActiveTintColor: '#059669',
      tabBarInactiveTintColor: 'lightgray',
      tabBarStyle: { backgroundColor: '#111820' },
      headerStyle: { backgroundColor: '#111820' },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
      },
    }}
  >
    <Tab.Screen 
      name="Home" 
      component={Home}
      options={{ tabBarIcon: ({ color }) => <Icon name="home" size={22} color={color} /> }}
    />
    <Tab.Screen 
      name="Mentor" 
      component={MentorSearch}
      options={{ tabBarIcon: ({ color }) => <Icon name="person" size={22} color={color} /> }}
    />
    <Tab.Screen 
      name="Jobs" 
      component={JobSearch}
      options={{ tabBarIcon: ({ color }) => <Icon name="briefcase" size={22} color={color} /> }}
    />
    <Tab.Screen 
      name="Profile" 
      component={StudentProfile}
      options={{ tabBarIcon: ({ color }) => <Icon name="person-circle" size={23} color={color} /> }}
    />
    <Tab.Screen 
      name="Dashboards" 
      component={Dash}
      options={{ tabBarIcon: ({ color }) => <Icon name="grid" size={23} color={color} /> }} 
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="Job Details" component={JobSearch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
