import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ArrowLeft, Clock } from 'lucide-react-native';
import AppHeader from '@/components/AppHeader';
import Colors from '@/constants/colors';
import { exercises } from '@/mocks/exercises';

export default function ExerciseDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [exerciseStarted, setExerciseStarted] = useState<boolean>(false);

  const exercise = exercises.find((e) => e.id === id);

  const handleEndExercise = useCallback(() => {
    console.log('End exercise pressed for:', id);
    Alert.alert(
      'Egzersiz Tamamlandı',
      'Egzersizi başarıyla tamamladınız! Tebrikler.',
      [
        {
          text: 'Tamam',
          onPress: () => {
            setExerciseStarted(false);
            router.back();
          },
        },
      ]
    );
  }, [id, router]);

  const handleStartExercise = useCallback(() => {
    console.log('Start exercise:', id);
    setExerciseStarted(true);
    Alert.alert('Egzersiz Başladı', 'Egzersizi dikkatli bir şekilde uygulayın. Kendinizi kötü hissederseniz durdurun.');
  }, [id]);

  if (!exercise) {
    return (
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <AppHeader />
        <View style={styles.notFound}>
          <Text style={styles.notFoundText}>Egzersiz bulunamadı.</Text>
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backBtnText}>Geri Dön</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <AppHeader />

      <View style={styles.categoryBanner}>
        <Text style={styles.categoryBannerText}>{exercise.categoryLabel}</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={{ uri: exercise.image }}
          style={styles.exerciseImage}
          resizeMode="cover"
        />

        <View style={styles.content}>
          <Text style={styles.title}>{exercise.title}</Text>

          <View style={styles.durationRow}>
            <Clock size={16} color={Colors.primary} />
            <Text style={styles.durationText}>{exercise.duration}</Text>
          </View>

          <Text style={styles.description}>{exercise.description}</Text>

          {!exerciseStarted ? (
            <TouchableOpacity
              style={styles.startButton}
              onPress={handleStartExercise}
              testID="start-exercise-btn"
            >
              <Text style={styles.startButtonText}>Egzersize Başla</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.activeExercise}>
              <View style={styles.timerContainer}>
                <Text style={styles.timerLabel}>Egzersiz devam ediyor...</Text>
                <Text style={styles.timerHint}>Kendinizi kötü hissederseniz durdurun</Text>
              </View>
            </View>
          )}
        </View>
      </ScrollView>

      <View style={[styles.bottomBar, { paddingBottom: Math.max(insets.bottom, 16) }]}>
        <TouchableOpacity
          style={styles.backNavBtn}
          onPress={() => router.back()}
          testID="exercise-back-btn"
        >
          <ArrowLeft size={20} color={Colors.white} />
          <Text style={styles.backNavText}>Geri</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.endButton}
          onPress={handleEndExercise}
          testID="end-exercise-btn"
        >
          <Text style={styles.endButtonText}>Son Egzersiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.headerGreen,
  },
  categoryBanner: {
    backgroundColor: Colors.bannerGreen,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  categoryBannerText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '800' as const,
    letterSpacing: 0.5,
  },
  scrollView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  exerciseImage: {
    width: '100%',
    height: 280,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700' as const,
    color: Colors.text,
    marginBottom: 12,
  },
  durationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 16,
  },
  durationText: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '600' as const,
  },
  description: {
    fontSize: 15,
    color: Colors.textSecondary,
    lineHeight: 22,
    marginBottom: 24,
  },
  startButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  startButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700' as const,
  },
  activeExercise: {
    alignItems: 'center',
  },
  timerContainer: {
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 12,
    width: '100%',
  },
  timerLabel: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: Colors.primary,
    marginBottom: 6,
  },
  timerHint: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 12,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  backNavBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  backNavText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '600' as const,
  },
  endButton: {
    backgroundColor: Colors.coral,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  endButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700' as const,
  },
  notFound: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  notFoundText: {
    fontSize: 18,
    color: Colors.textSecondary,
    marginBottom: 16,
  },
  backBtn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
  },
  backBtnText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: '600' as const,
  },
});
