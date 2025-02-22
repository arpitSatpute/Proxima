import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import StudentProfile from './student/StudentProfile';


const Dash = () => {
    const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerSubtitle}>Monitor your progress</Text>
      </View>
      <View style={styles.cardsContainer}>
        <TouchableOpacity 
          style={styles.card} 
          onPress={() => navigation.navigate('StudentProfile')} // Hardcoded navigation
        >
          <Icon name='school' size={32} color="#059669" />
          <Text style={styles.cardTitle}>Student Profile</Text>
          <Text style={styles.cardDescription}>Track your learning journey and achievements</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.card} 
          onPress={() => navigation.navigate('MentorDash')} // Hardcoded navigation
        >
          <Icon name='people' size={32} color="#059669" />
          <Text style={styles.cardTitle}>Mentor Dashboard</Text>
          <Text style={styles.cardDescription}>View mentoring sessions and feedback</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.card} 
          onPress={() => navigation.navigate('EmployeeDash')} 
        >
          <Icon name='briefcase' size={32} color="#059669" />
          <Text style={styles.cardTitle}>Employee Dashboard</Text>
          <Text style={styles.cardDescription}>Monitor your job application status</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.card} 
          onPress={() => navigation.navigate('CollegeDash')} 
        >
          <Icon name='ribbon' size={32} color="#059669" />
          <Text style={styles.cardTitle}>College Dashboard</Text>
          <Text style={styles.cardDescription}>Review your skills and certifications</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Dash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111820',
  },
  header: {
    padding: 20,
    paddingTop: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#9CA3AF',
    marginTop: 5,
  },
  cardsContainer: {
    padding: 15,
  },
  card: {
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: '#9CA3AF',
    marginTop: 5,
  }
});