import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppHeader from '@/components/AppHeader';
import Colors from '@/constants/colors';
import { informationFormContent } from '@/mocks/informationForm';

export default function BilgilendirmeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <AppHeader />

      <View style={styles.titleBanner}>
        <Text style={styles.titleBannerText}>{informationFormContent.title}</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {informationFormContent.sections.map((section, index) => (
          <View key={index} style={styles.section} testID={`form-section-${index}`}>
            <Text style={styles.sectionHeading}>{section.heading}</Text>
            <Text style={styles.sectionBody}>{section.body}</Text>
          </View>
        ))}
        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.headerGreen,
  },
  titleBanner: {
    backgroundColor: Colors.bannerGreen,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  titleBannerText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700' as const,
  },
  scrollView: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollContent: {
    padding: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeading: {
    fontSize: 16,
    fontWeight: '800' as const,
    color: Colors.text,
    marginBottom: 8,
  },
  sectionBody: {
    fontSize: 15,
    color: Colors.textSecondary,
    lineHeight: 22,
  },
});
