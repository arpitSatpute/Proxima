import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image, View, Text } from 'react-native'; // Import Image and View components

import MentorSearch from './components/mentor/MentorSearch';
import Home from './components/Home';
import MentorDash from './components/mentor/MentorDash';
import CollegeDash from './components/college/CollegeDash';
import JobSearch from './components/job/JobSearch';
import StudentProfile from './components/student/StudentProfile';
import Chat from './components/Chat/Chat';
import Dash from './components/Dash';
import AdminDash from './components/Admin/AdminDash';
import Logo from './assets/Logo.png';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#059669',
      tabBarInactiveTintColor: 'lightgray',
      tabBarStyle: {
        backgroundColor: '#111820',
        // elevation: 0, // Remove shadow on Android
        // borderTopWidth: 0, // Remove top border
      },
    }}>
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
        tabBarIcon: ({ color }) => (
          <Icon name="briefcase" size={22} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Chat"
      component={Chat}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="chatbubbles" size={23} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Dashboards"
      component={Dash}
      options={{
        tabBarIcon: ({ color }) => <Icon name="grid" size={23} color={color} />,
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#111820',
            elevation: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: '#fff',
            fontSize: 24,
            fontWeight: 'bold',
          },
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <Icon
              name="chevron-back"
              size={24}
              color="#fff"
              style={{ marginLeft: 10 }}
            />
          ),
        }}>
        <Stack.Screen
          name="Proxima"
          component={TabNavigator}
          options={{
            headerShown: true,
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require('./assets/Logo.png')} // Replace with your image path
                  style={{ width: 40, height: 40 }} // Adjust size as needed
                />
                <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold', marginLeft: 2 }}>
                  Proxima
                </Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="MentorDash"
          component={MentorDash}
          options={{ title: 'Mentor Dashboard' }}
        />
        <Stack.Screen
          name="CollegeDash"
          component={CollegeDash}
          options={{ title: 'College Dashboard' }}
        />
        <Stack.Screen
          name="AdminDash"
          component={AdminDash}
          options={{ title: 'Admin Dashboard' }}
        />
        <Stack.Screen
          name="StudentProfile"
          component={StudentProfile}
          options={{ title: 'Student Profile' }}
        />
        {/* <Stack.Screen
          name="EmployerDash"
          component={EmployerDash}
          options={{ title: 'EmployerDash' }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}