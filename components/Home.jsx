import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  ScrollView, 
  View, 
  Text, 
  TouchableOpacity, 
  Dimensions,
  Animated,
  Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const Home = () => {
  const navigation = useNavigation();
  const [scrollY] = useState(new Animated.Value(0));
  const [floatAnims] = useState({
    orb1: new Animated.Value(0),
    orb2: new Animated.Value(0), 
    orb3: new Animated.Value(0),
    orb4: new Animated.Value(0)
  });

  useEffect(() => {
    const createFloatingAnimation = (anim, duration, delay) => {
      return Animated.loop(
        Animated.sequence([
          Animated.timing(anim, {
            toValue: 1,
            duration,
            delay,
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 0,
            duration,
            delay: 0,
            useNativeDriver: true,
          }),
        ])
      );
    };

    Animated.parallel([
      createFloatingAnimation(floatAnims.orb1, 4000, 0),
      createFloatingAnimation(floatAnims.orb2, 5000, 1000),
      createFloatingAnimation(floatAnims.orb3, 6000, 500),
      createFloatingAnimation(floatAnims.orb4, 7000, 1500),
    ]).start();
  }, []);

  const features = [
    {
      title: "AI Resume Tailoring",
      description: "Get personalized resume optimization using advanced AI",
      backgroundColor: '#059669',
      gradient: ['#059669', '#047857'],
      icon: 'document-text',
      navigate: 'StudentProfile'
    },
    {
      title: "Mentor Connect",
      description: "Connect with industry experts who can guide your career journey",
      backgroundColor: '#10b981',
      gradient: ['#10b981', '#059669'],
      icon: 'people',
      navigate: 'MentorSearch'
    },
    {
      title: "Job Search",
      description: "Find your dream job with AI-powered job matching",
      backgroundColor: '#059669',
      gradient: ['#059669', '#047857'],
      icon: 'briefcase',
      navigate: 'Jobs'
    },
    {
      title: "Skill Development",
      description: "Access courses and resources to build in-demand skills",
      backgroundColor: '#10b981',
      gradient: ['#10b981', '#059669'],
      icon: 'school',
      navigate: 'CollegeDash'
    }
  ];

  const FeatureCard = ({ title, description, gradient, icon, navigate }) => {
    const CardContainer = Platform.OS === 'ios' ? BlurView : View;
    const cardProps = Platform.OS === 'ios' ? {
      blurType: "dark",
      blurAmount: 20,
    } : {};
    return (
      <TouchableOpacity 
        activeOpacity={0.9}
        onPress={() => navigation.navigate(navigate)}
      >
        <CardContainer style={styles.card} {...cardProps}>
          <View style={[styles.cardContent, { backgroundColor: Platform.OS === 'ios' ? 'transparent' : 'rgba(255, 255, 255, 0.07)' }]}>
            <View style={[styles.iconContainer, { backgroundColor: gradient[0] }]}>
              <Icon name={icon} size={24} color="#fff" />
            </View>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardDescription}>{description}</Text>
          </View>
        </CardContainer>
      </TouchableOpacity>
    );
  };

  const FloatingOrb = ({ style, anim }) => (
    <Animated.View
      style={[
        styles.orb,
        style,
        {
          transform: [{
            translateY: anim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 20]
            })
          }]
        }
      ]}
    />
  );

  return (
    <View style={styles.container}>
      {/* Floating Orbs */}
      <FloatingOrb style={styles.orb1} anim={floatAnims.orb1} />
      <FloatingOrb style={styles.orb2} anim={floatAnims.orb2} />
      <FloatingOrb style={styles.orb3} anim={floatAnims.orb3} />
      <FloatingOrb style={styles.orb4} anim={floatAnims.orb4} />

      <ScrollView
        style={styles.scrollView}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>
            Elevate Your{'\n'}
            <Text style={styles.heroTitleHighlight}>Career Path</Text>
          </Text>
          <Text style={styles.heroSubtitle}>
            Connect with mentors, find opportunities, and build your future with AI-powered guidance
          </Text>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('MentorSearch')} style={styles.primaryButton}>
              <Icon name="rocket" size={20} color="#fff" style={{marginRight: 8}} />
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate('MentorSearch')} style={styles.secondaryButton}>
              <Icon name="people" size={20} color="#fff" style={{marginRight: 8}} />
              <Text style={styles.secondaryButtonText}>Find a Mentor</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Our Features</Text>
          <View style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </View>
        </View>

        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Ready to Transform Your Career?</Text>
          <Text style={styles.ctaSubtitle}>
            Join our community of mentors and professionals
          </Text>
          <TouchableOpacity 
            style={styles.ctaButton}
            onPress={() => navigation.navigate('StudentProfile')}
          >
            <Icon name="arrow-forward" size={20} color="#fff" style={{marginRight: 8}} />
            <Text style={styles.ctaButtonText}>Join Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1121',
  },
  scrollView: {
    flex: 1,
  },
  orb: {
    position: 'absolute',
    borderRadius: 999,
    opacity: 0.4,
    filter: 'blur(30px)',
  },
  orb1: {
    width: 300,
    height: 300,
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    top: -100,
    left: -100,
  },
  orb2: {
    width: 250,
    height: 250,
    backgroundColor: 'rgba(52, 211, 153, 0.2)',
    top: height * 0.3,
    right: -50,
  },
  orb3: {
    width: 200,
    height: 200,
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    bottom: height * 0.2,
    left: -50,
  },
  orb4: {
    width: 180,
    height: 180,
    backgroundColor: 'rgba(52, 211, 153, 0.15)',
    bottom: -50,
    right: -30,
  },
  hero: {
    padding: 24,
    paddingTop: Platform.OS === 'ios' ? 100 : 80,
    marginBottom: 40,
  },
  heroTitle: {
    fontSize: 44,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 16,
    lineHeight: 52,
  },
  heroTitleHighlight: {
    color: '#10b981',
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#9ca3af',
    lineHeight: 28,
    marginBottom: 32,
    maxWidth: '90%',
  },
  buttonContainer: {
    gap: 16,
  },
  primaryButton: {
    backgroundColor: '#059669',
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#059669',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  secondaryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.3)',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '600',
  },
  secondaryButtonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '600',
  },
  featuresSection: {
    padding: 24,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 24,
  },
  featuresGrid: {
    gap: 20,
  },
  card: {
    borderRadius: 20,
    marginBottom: 4,
    overflow: 'hidden',
  },
  cardContent: {
    padding: 24,
  },
  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 16,
    color: '#9ca3af',
    lineHeight: 24,
  },
  ctaSection: {
    margin: 24,
    padding: 32,
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.3)',
  },
  ctaTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 12,
  },
  ctaSubtitle: {
    fontSize: 17,
    color: '#9ca3af',
    textAlign: 'center',
    marginBottom: 32,
  },
  ctaButton: {
    backgroundColor: '#059669',
    padding: 18,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#059669',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ctaButtonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '600',
  },
});

export default Home;
