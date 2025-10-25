import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator'; // adjust the path if needed

const { width } = Dimensions.get('window');

type LandingScreenProp = NativeStackNavigationProp<RootStackParamList, 'Signup'>;

const LandingScreen = () => {
  const navigation = useNavigation<LandingScreenProp>();

  return (
    <View style={styles.container}>
      {/* Hero Image */}
      <Image
        source={{ uri: 'https://imgs.search.brave.com/OiKm9L8HpegwzUWxTtaDuwd1s3tILS-iFI1ybBZQPTQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTc3/NTA5NTc4L3Bob3Rv/L3NtYXJ0cGhvbmUt/YmV6ZWwtbGVzcy10/ZW1wbGF0ZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9MkYw/UVI3eEd4cTVxYzBs/WnEzSU5MekFxLU10/M3FpMHpEQ2VWcVlq/VC14dz0' }}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome to Mobile Shop</Text>
        <Text style={styles.subtitle}>
          Build your dreams with modern mobile technology. Explore products, track orders, and enjoy seamless shopping experience.
        </Text>
      </View>

      {/* Get Started Button */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Signup')} // Navigate to Signup screen
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      {/* Optional small footer */}
      <Text style={styles.footer}>By continuing, you agree to our Terms & Conditions</Text>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // white background
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  image: {
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 5,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000', // black text
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#6e4343ff', // custom button color
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
  footer: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
  },
});
