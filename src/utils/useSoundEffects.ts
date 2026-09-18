import { useCallback, useEffect, useRef, useState } from 'react';
import { Platform } from 'react-native';
import { createAudioPlayer, setAudioModeAsync, AudioPlayer } from 'expo-audio';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SOUND_KEY = '@game_sound_enabled_v1';

// Skip audio only on web; simulator + device both support audio
const AUDIO_SUPPORTED = Platform.OS !== 'web';

type SoundSource = Parameters<typeof createAudioPlayer>[0];

const CORRECT_SRC:  SoundSource = require('../../assets/sounds/correct.wav');
const WRONG_SRC:    SoundSource = require('../../assets/sounds/wrong.wav');
const COMPLETE_SRC: SoundSource = require('../../assets/sounds/complete.wav');

export function useSoundEffects() {
  const [soundEnabled, setSoundEnabled] = useState(true);

  const correctRef  = useRef<AudioPlayer | null>(null);
  const wrongRef    = useRef<AudioPlayer | null>(null);
  const completeRef = useRef<AudioPlayer | null>(null);

  useEffect(() => {
    AsyncStorage.getItem(SOUND_KEY).then(val => {
      if (val !== null) setSoundEnabled(val === 'true');
    });

    if (!AUDIO_SUPPORTED) return;

    setAudioModeAsync({ playsInSilentMode: true }).catch(() => {});

    correctRef.current  = createAudioPlayer(CORRECT_SRC);
    wrongRef.current    = createAudioPlayer(WRONG_SRC);
    completeRef.current = createAudioPlayer(COMPLETE_SRC);

    return () => {
      correctRef.current?.remove();
      wrongRef.current?.remove();
      completeRef.current?.remove();
    };
  }, []);

  // replace() resets position to 0 synchronously — avoids async seekTo race with re-renders
  const play = useCallback((ref: React.MutableRefObject<AudioPlayer | null>, src: SoundSource) => {
    if (!soundEnabled || !ref.current || !src) return;
    try {
      ref.current.replace(src);
      ref.current.play();
    } catch {}
  }, [soundEnabled]);

  return {
    soundEnabled,
    playCorrect:  () => play(correctRef, CORRECT_SRC),
    playWrong:    () => play(wrongRef, WRONG_SRC),
    playComplete: () => play(completeRef, COMPLETE_SRC),
    toggleSound: () => {
      setSoundEnabled(prev => {
        const next = !prev;
        AsyncStorage.setItem(SOUND_KEY, String(next)).catch(() => {});
        return next;
      });
    },
  };
}
