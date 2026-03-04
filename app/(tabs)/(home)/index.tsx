import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppHeader from '@/components/AppHeader';
import ReadyDialog from '@/components/ReadyDialog';
import Colors from '@/constants/colors';
import { exercises, categories } from '@/mocks/exercises';

export default function HomeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [readyDialogVisible, setReadyDialogVisible] = useState<boolean>(false);
  const [pendingExerciseId, setPendingExerciseId] = useState<string | null>(null);

  const filteredExercises =
    selectedCategory === 'all'
      ? exercises
      : exercises.filter((e) => e.category === selectedCategory);

  const handleExercisePress = useCallback((exerciseId: string) => {
    console.log('Exercise pressed:', exerciseId);
    setPendingExerciseId(exerciseId);
    setReadyDialogVisible(true);
  }, []);

  const handleReadyConfirm = useCallback(() => {
    console.log('Ready confirmed for exercise:', pendingExerciseId);
    setReadyDialogVisible(false);
    if (pendingExerciseId) {
      router.push(`/exercise/${pendingExerciseId}`);
    }
  }, [pendingExerciseId, router]);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <AppHeader />

      <View style={styles.categoryRow}>
        <TouchableOpacity
          style={[
            styles.categoryChip,
            selectedCategory === 'all' && styles.categoryChipActive,
          ]}
          onPress={() => setSelectedCategory('all')}
          testID="category-all"
        >
          <Text
            style={[
              styles.categoryChipText,
              selectedCategory === 'all' && styles.categoryChipTextActive,
            ]}
          >
            Tümü
          </Text>
        </TouchableOpacity>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat.id}
            style={[
              styles.categoryChip,
              selectedCategory === cat.id && styles.categoryChipActive,
            ]}
            onPress={() => setSelectedCategory(cat.id)}
            testID={`category-${cat.id}`}
          >
            <Text
              style={[
                styles.categoryChipText,
                selectedCategory === cat.id && styles.categoryChipTextActive,
              ]}
            >
              {cat.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {filteredExercises.map((exercise) => (
          <TouchableOpacity
            key={exercise.id}
            style={styles.exerciseCard}
            onPress={() => handleExercisePress(exercise.id)}
            activeOpacity={0.8}
            testID={`exercise-card-${exercise.id}`}
          >
            <View style={styles.categoryBanner}>
              <Text style={styles.categoryBannerText}>{exercise.categoryLabel}</Text>
            </View>

            <Image
              source={{ uri: exercise.image }}
              style={styles.exerciseImage}
              resizeMode="cover"
            />

            <View style={styles.exerciseContent}>
              <Text style={styles.exerciseTitle}>{exercise.title}</Text>
              <Text style={styles.exerciseDescription} numberOfLines={4}>
                {exercise.description}
              </Text>
              <Text style={styles.exerciseDuration}>{exercise.duration}</Text>
            </View>
          </TouchableOpacity>
        ))}
        <View style={{ height: 24 }} />
      </ScrollView>

      <ReadyDialog visible={readyDialogVisible} onConfirm={handleReadyConfirm} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.headerGreen,
  },
  categoryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: Colors.white,
    gap: 8,
  },
  categoryChip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: Colors.grayLight,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  categoryChipActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  categoryChipText: {
    fontSize: 12,
    fontWeight: '600' as const,
    color: Colors.textSecondary,
  },
  categoryChipTextActive: {
    color: Colors.white,
  },
  scrollView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  exerciseCard: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: Colors.white,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    borderWidth: 1,
    borderColor: Colors.border,
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
  exerciseImage: {
    width: '100%',
    height: 200,
  },
  exerciseContent: {
    padding: 16,
  },
  exerciseTitle: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: Colors.text,
    marginBottom: 8,
  },
  exerciseDescription: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
    marginBottom: 8,
  },
  exerciseDuration: {
    fontSize: 13,
    color: Colors.primary,
    fontWeight: '600' as const,
  },
});
