import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const StudentProfile = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileHeader}>
          
          <View style={styles.profileInfo}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.subtitle}>Computer Science Student</Text>
            <View style={styles.badgeContainer}>
              <View style={styles.badge}>
                <Icon name="star" size={12} color="#FCD34D" />
                <Text style={styles.badgeText}>Top Performer</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Courses</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Certifications</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>4.8</Text>
            <Text style={styles.statLabel}>GPA</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Academic Information</Text>
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Icon name="school" size={20} color="#059669" />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>University</Text>
              <Text style={styles.infoValue}>Stanford University</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Icon name="book" size={20} color="#059669" />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Major</Text>
              <Text style={styles.infoValue}>Computer Science</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Icon name="calendar" size={20} color="#059669" />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Class Year</Text>
              <Text style={styles.infoValue}>2024</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Icon name="star" size={20} color="#059669" />
            <View style={styles.infoTextContainer}>
              <Text style={styles.infoLabel}>Academic Standing</Text>
              <Text style={styles.infoValue}>Dean's List</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills & Certifications</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.skillCard}>
            <Icon name="code-slash" size={24} color="#059669" />
            <Text style={styles.skillTitle}>Full Stack Development</Text>
            <Text style={styles.skillLevel}>Advanced</Text>
          </View>
          <View style={styles.skillCard}>
            <Icon name="analytics" size={24} color="#059669" />
            <Text style={styles.skillTitle}>Data Science</Text>
            <Text style={styles.skillLevel}>Intermediate</Text>
          </View>
          <View style={styles.skillCard}>
            <Icon name="cloud" size={24} color="#059669" />
            <Text style={styles.skillTitle}>Cloud Computing</Text>
            <Text style={styles.skillLevel}>Beginner</Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Wallet</Text>
        <View style={styles.walletCard}>
          <View style={styles.walletHeader}>
            <Text style={styles.balance}>$2,450.00</Text>
            <Text style={styles.balanceLabel}>Available Balance</Text>
          </View>
          <View style={styles.walletActions}>
            <TouchableOpacity style={styles.walletButton}>
              <Icon name="add-circle" size={24} color="#059669" />
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.walletButton}>
              <Icon name="arrow-forward-circle" size={24} color="#059669" />
              <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.walletButton}>
              <Icon name="time" size={24} color="#059669" />
              <Text style={styles.buttonText}>History</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default StudentProfile;

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
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#1F2937',
  },
  profileInfo: {
    marginLeft: 20,
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
  infoCard: {
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: 15,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(156, 163, 175, 0.1)',
  },
  infoTextContainer: {
    marginLeft: 15,
  },
  infoLabel: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  infoValue: {
    fontSize: 16,
    color: '#fff',
    marginTop: 2,
  },
  skillCard: {
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: 15,
    marginRight: 15,
    alignItems: 'center',
    width: 150,
  },
  skillTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    textAlign: 'center',
  },
  skillLevel: {
    color: '#059669',
    fontSize: 14,
    marginTop: 5,
  },
  walletCard: {
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: 20,
  },
  walletHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  balance: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  balanceLabel: {
    fontSize: 14,
    color: '#9CA3AF',
    marginTop: 4,
  },
  walletActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  walletButton: {
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    marginTop: 4,
  },
});
