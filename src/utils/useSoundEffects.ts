import { useCallback, useEffect, useRef, useState } from 'react';
import { createAudioPlayer, setAudioModeAsync, AudioPlayer } from 'expo-audio';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

const SOUND_KEY = '@game_sound_enabled_v1';

// iOS Simulator has no audio hardware — skip all audio to avoid CoreAudio log spam
const AUDIO_SUPPORTED = Constants.isDevice;

export function useSoundEffects() {
  const [soundEnabled, setSoundEnabled] = useState(true);

  const correctRef  = useRef<AudioPlayer | null>(null);
  const wrongRef    = useRef<AudioPlayer | null>(null);
  const completeRef = useRef<AudioPlayer | null>(null);

  useEffect(() => {
    AsyncStorage.getItem(SOUND_KEY).then(val => {
      if (val !== null) setSoundEnabled(val === 'true');
    });

    if (!AUDIO_SUPPORTED) return; // skip on simulator

    setAudioModeAsync({ playsInSilentMode: true }).catch(() => {});
    correctRef.current  = createAudioPlayer(require('../../assets/sounds/correct.wav'));
    wrongRef.current    = createAudioPlayer(require('../../assets/sounds/wrong.wav'));
    completeRef.current = createAudioPlayer(require('../../assets/sounds/complete.wav'));

    return () => {
      correctRef.current?.remove();
      wrongRef.current?.remove();
      completeRef.current?.remove();
    };
  }, []);

  const play = useCallback((ref: React.MutableRefObject<AudioPlayer | null>) => {
    if (!soundEnabled || !ref.current) return;
    try { ref.current.seekTo(0); ref.current.play(); } catch {}
  }, [soundEnabled]);

  return {
    soundEnabled,
    playCorrect:  () => play(correctRef),
    playWrong:    () => play(wrongRef),
    playComplete: () => play(completeRef),
    toggleSound: () => {
      setSoundEnabled(prev => {
        const next = !prev;
        AsyncStorage.setItem(SOUND_KEY, String(next)).catch(() => {});
        return next;
      });
    },
  };
}
