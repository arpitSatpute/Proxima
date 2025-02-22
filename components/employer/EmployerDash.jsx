import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const EmployerDash = () => {
  const [activeJobs, setActiveJobs] = useState([
    {
      id: 1,
      title: 'Senior Software Engineer',
      applicants: 24,
      status: 'active',
      posted: '2 weeks ago'
    },
    {
      id: 2, 
      title: 'Product Designer',
      applicants: 18,
      status: 'active',
      posted: '1 week ago'
    }
  ]);

  const closeJob = (jobId) => {
    setActiveJobs(activeJobs.map(job => 
      job.id === jobId ? {...job, status: 'closed'} : job
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileHeader}>
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Tech Corp Inc.</Text>
            <Text style={styles.subtitle}>Technology Company • San Francisco</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Active Jobs</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>156</Text>
            <Text style={styles.statLabel}>Total Applications</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Hired</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Active Job Postings</Text>
          <TouchableOpacity style={styles.addButton}>
            <Icon name="add" size={24} color="#059669" />
          </TouchableOpacity>
        </View>

        {activeJobs.map(job => (
          <View key={job.id} style={styles.jobCard}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <TouchableOpacity 
                style={[styles.statusBadge, 
                  job.status === 'closed' ? styles.closedBadge : styles.activeBadge
                ]}
                onPress={() => closeJob(job.id)}
              >
                <Text style={styles.statusText}>
                  {job.status === 'active' ? 'Active' : 'Closed'}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.jobStats}>
              <Text style={styles.jobDetail}>
                <Icon name="people" size={16} color="#9CA3AF" /> {job.applicants} Applicants
              </Text>
              <Text style={styles.jobDetail}>
                <Icon name="time" size={16} color="#9CA3AF" /> {job.posted}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Analytics Overview</Text>
        <View style={styles.analyticsCard}>
          <View style={styles.analyticsRow}>
            <Text style={styles.analyticsLabel}>Application Rate</Text>
            <Text style={styles.analyticsValue}>+12.5%</Text>
          </View>
          <View style={styles.analyticsRow}>
            <Text style={styles.analyticsLabel}>Average Time to Hire</Text>
            <Text style={styles.analyticsValue}>18 days</Text>
          </View>
          <View style={styles.analyticsRow}>
            <Text style={styles.analyticsLabel}>Profile Views</Text>
            <Text style={styles.analyticsValue}>324</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Applicants</Text>
        {[1, 2, 3].map(i => (
          <View key={i} style={styles.applicantCard}>
            <View style={styles.applicantInfo}>
              <Text style={styles.applicantName}>Applicant {i}</Text>
              <Text style={styles.applicantRole}>Senior Software Engineer</Text>
              <Text style={styles.applicantDetail}>Applied 2 days ago</Text>
            </View>
            <View style={styles.applicantActions}>
              <TouchableOpacity style={styles.viewButton}>
                <Icon name="eye" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default EmployerDash;

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
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  addButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'rgba(5, 150, 105, 0.1)',
  },
  jobCard: {
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  activeBadge: {
    backgroundColor: 'rgba(5, 150, 105, 0.1)',
  },
  closedBadge: {
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
  },
  statusText: {
    fontSize: 12,
    color: '#059669',
  },
  jobStats: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 16,
  },
  jobDetail: {
    fontSize: 14,
    color: '#9CA3AF',
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
  applicantCard: {
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  applicantInfo: {
    flex: 1,
  },
  applicantName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  applicantRole: {
    fontSize: 14,
    color: '#9CA3AF',
    marginTop: 2,
  },
  applicantDetail: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  applicantActions: {
    flexDirection: 'row',
    gap: 8,
  },
  viewButton: {
    backgroundColor: '#059669',
    padding: 8,
    borderRadius: 8,
  },
});
