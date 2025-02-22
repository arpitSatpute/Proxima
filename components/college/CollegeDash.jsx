import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CollegeDash = () => {
  return (
    <ScrollView style={styles.container}>
      {/* College Profile Header */}
      <View style={styles.header}>
        <View style={styles.profileHeader}>
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Stanford University</Text>
            <Text style={styles.subtitle}>Engineering & Technology</Text>
          </View>
          <TouchableOpacity>
            <Icon name="settings-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>2,500</Text>
            <Text style={styles.statLabel}>Students</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>180</Text>
            <Text style={styles.statLabel}>Faculty</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>92%</Text>
            <Text style={styles.statLabel}>Placement</Text>
          </View>
        </View>
      </View>

      {/* Analytics Overview */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Analytics Overview</Text>
        <View style={styles.analyticsCard}>
          <View style={styles.analyticsRow}>
            <Text style={styles.analyticsLabel}>Average GPA</Text>
            <Text style={styles.analyticsValue}>3.8</Text>
          </View>
          <View style={styles.analyticsRow}>
            <Text style={styles.analyticsLabel}>Placement Rate</Text>
            <Text style={styles.analyticsValue}>92%</Text>
          </View>
          <View style={styles.analyticsRow}>
            <Text style={styles.analyticsLabel}>Mentor Sessions</Text>
            <Text style={styles.analyticsValue}>156 this month</Text>
          </View>
        </View>
      </View>

      {/* Recent Placements */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Placements</Text>
        {[1, 2, 3].map(i => (
          <View key={i} style={styles.placementCard}>
            <View style={styles.placementInfo}>
              <Text style={styles.studentName}>Student {i}</Text>
              <Text style={styles.companyName}>Google</Text>
              <Text style={styles.position}>Software Engineer | $125k/year</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Student Achievements */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Student Achievements</Text>
        {[1].map(i => (
          <View key={i} style={styles.achievementCard}>
            <Icon name="trophy" size={24} color="#FFD700" />
            <View style={styles.achievementInfo}>
              <Text style={styles.achievementTitle}>Hackathon Winner</Text>
              <Text style={styles.achievementDetail}>Team ARC won first place</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Skill Test Results */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Skill Assessments</Text>
        <View style={styles.skillCard}>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>JavaScript</Text>
            <Text style={styles.skillScore}>85%</Text>
          </View>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>Python</Text>
            <Text style={styles.skillScore}>92%</Text>
          </View>
          <View style={styles.skillRow}>
            <Text style={styles.skillName}>Java</Text>
            <Text style={styles.skillScore}>78%</Text>
          </View>
        </View>
      </View>

      {/* Upcoming Mentor Sessions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Group Sessions</Text>
        {[1, 2].map(i => (
          <View key={i} style={styles.sessionCard}>
            <View style={styles.sessionInfo}>
              <Text style={styles.sessionTitle}>System Design Workshop</Text>
              <Text style={styles.sessionDetail}>
                <Icon name="time-outline" size={14} color="#9CA3AF" /> Tomorrow, 2:00 PM
              </Text>
              <Text style={styles.sessionDetail}>
                <Icon name="people-outline" size={14} color="#9CA3AF" /> 25 Students
              </Text>
            </View>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Join</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

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
    justifyContent: 'space-between',
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
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 4,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  analyticsCard: {
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: 15,
  },
  analyticsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
  },
  analyticsLabel: {
    color: '#9CA3AF',
    fontSize: 14,
  },
  analyticsValue: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  placementCard: {
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
  },
  placementInfo: {
    gap: 4,
  },
  studentName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  companyName: {
    fontSize: 14,
    color: '#059669',
  },
  position: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  achievementCard: {
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  achievementDetail: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  skillCard: {
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: 15,
  },
  skillRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
  },
  skillName: {
    color: '#fff',
    fontSize: 14,
  },
  skillScore: {
    color: '#059669',
    fontSize: 14,
    fontWeight: '600',
  },
  sessionCard: {
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sessionInfo: {
    flex: 1,
    gap: 4,
  },
  sessionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  sessionDetail: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  joinButton: {
    backgroundColor: '#059669',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  joinButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default CollegeDash;
