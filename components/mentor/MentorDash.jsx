import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const MentorDash = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileHeader}>
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Dr. Jane Smith</Text>
            <Text style={styles.subtitle}>Senior Software Engineer</Text>
            <View style={styles.badgeContainer}>
              <View style={styles.badge}>
                <Icon name="star" size={12} color="#FCD34D" />
                <Text style={styles.badgeText}>Top Rated Mentor</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>4.9</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>156</Text>
            <Text style={styles.statLabel}>Sessions</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>45</Text>
            <Text style={styles.statLabel}>Students</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Session Requests</Text>
        <View style={styles.requestCard}>
          <View style={styles.requestRow}>
            <Icon name="person-circle" size={40} color="#059669" />
            <View style={styles.requestInfo}>
              <Text style={styles.studentName}>Alex Johnson</Text>
              <Text style={styles.requestTopic}>React Native Development</Text>
              <Text style={styles.requestTime}>Tomorrow, 2:00 PM</Text>
            </View>
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.acceptButton}>
                <Icon name="checkmark" size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.declineButton}>
                <Icon name="close" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Sessions</Text>
        <View style={styles.sessionCard}>
          <View style={styles.sessionHeader}>
            <Text style={styles.sessionTime}>Today, 4:00 PM</Text>
            <View style={styles.sessionStatus}>
              <Text style={styles.statusText}>Confirmed</Text>
            </View>
          </View>
          <View style={styles.sessionDetails}>
            <Text style={styles.sessionTitle}>Advanced JavaScript Concepts</Text>
            <Text style={styles.studentInfo}>with Michael Chen</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Reviews</Text>
        <View style={styles.reviewCard}>
          <View style={styles.reviewHeader}>
            <Text style={styles.reviewerName}>Sarah Wilson</Text>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={16} color="#FCD34D" />
              <Text style={styles.rating}>5.0</Text>
            </View>
          </View>
          <Text style={styles.reviewText}>
            "Excellent mentor! Really helped me understand complex concepts in a simple way."
          </Text>
          <Text style={styles.reviewDate}>2 days ago</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default MentorDash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111820',
  },
  header: {
    padding: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#9CA3AF',
  },
  badgeContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(252, 211, 77, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    color: '#FCD34D',
    fontSize: 12,
    marginLeft: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: 15,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  statLabel: {
    fontSize: 14,
    color: '#9CA3AF',
    marginTop: 4,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  requestCard: {
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: 15,
  },
  requestRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  requestInfo: {
    flex: 1,
    marginLeft: 15,
  },
  studentName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  requestTopic: {
    fontSize: 14,
    color: '#9CA3AF',
    marginTop: 2,
  },
  requestTime: {
    fontSize: 12,
    color: '#059669',
    marginTop: 4,
  },
  actionButtons: {
    flexDirection: 'row',
  },
  acceptButton: {
    backgroundColor: '#059669',
    padding: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  declineButton: {
    backgroundColor: '#DC2626',
    padding: 8,
    borderRadius: 8,
  },
  sessionCard: {
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
  },
  sessionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sessionTime: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  sessionStatus: {
    backgroundColor: 'rgba(5, 150, 105, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#059669',
    fontSize: 12,
  },
  sessionDetails: {
    marginTop: 10,
  },
  sessionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  studentInfo: {
    fontSize: 14,
    color: '#9CA3AF',
    marginTop: 2,
  },
  reviewCard: {
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    color: '#FCD34D',
    marginLeft: 4,
    fontSize: 14,
  },
  reviewText: {
    color: '#9CA3AF',
    fontSize: 14,
    marginTop: 8,
    lineHeight: 20,
  },
  reviewDate: {
    color: '#6B7280',
    fontSize: 12,
    marginTop: 8,
  },
});
