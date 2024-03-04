import { Audio } from 'expo-av';
import LottieView from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';
import { Image, StyleSheet, View } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const sound = useRef(new Audio.Sound());

  useEffect(() => {
    const playAudio = async () => {
      try {
        await sound.current.loadAsync(require('../src/sounds/sound4.mp3'));
        await sound.current.playAsync();
      } catch (error) {
        console.error('Erro ao carregar ou reproduzir o áudio', error);
      }
    };

    playAudio();

    const timer = setTimeout(() => {
      navigation.replace('TelaDeLogin');
    }, 3000);

    return () => {
      clearTimeout(timer);
      sound.current.unloadAsync();
    };
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/ZNeoGreenLogo.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.animationContainer}>
        <LottieView
          source={require('../src/animations/Bookmark4.json')}
          autoPlay={true}
          loop={false}
          style={styles.animation}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2AE45B',
  },
  image: {
    width: '80%',
    height: '40%',
    marginBottom: 20,
  },
  animationContainer: {
    position: 'absolute',
    top: '20%',
    left: '7%',
    width: '100%',
    alignItems: 'center',
  },
  animation: {
    width: '60%',
    height: '60%',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
});

export default SplashScreen;
