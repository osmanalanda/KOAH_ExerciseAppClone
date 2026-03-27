import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { User, Lock } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import Colors from '@/constants/colors';

interface AppHeaderProps {
  showIcons?: boolean;
}

export default function AppHeader({ showIcons = true }: AppHeaderProps) {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <Text style={styles.title}>KOAH EGZERSİZ</Text>
      {showIcons && (
        <View style={styles.icons}>
          <TouchableOpacity
            onPress={() => router.push('/profile')}
            style={styles.iconBtn}
            testID="header-profile-btn"
          >
            <User size={26} color={Colors.white} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn} testID="header-lock-btn">
            <Lock size={24} color={Colors.white} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.headerGreen,
    paddingHorizontal: 16,
    paddingBottom: 12,
    paddingTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: '800' as const,
    letterSpacing: 1,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconBtn: {
    padding: 4,
  },
});
