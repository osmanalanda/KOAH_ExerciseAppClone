import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Menu, Mail, Bell, Settings } from 'lucide-react-native';
import StatCardView from '@/components/StatCardView';
import Colors from '@/constants/colors';
import { statCards, users } from '@/mocks/admin';

export default function PanelScreen() {
  const insets = useSafeAreaInsets();

  const handleStatAction = useCallback((cardId: string) => {
    console.log('Stat action pressed:', cardId);
    switch (cardId) {
      case 'videos':
        Alert.alert('Yeni Video', 'Yeni eğitim videosu ekleme ekranı açılacak.');
        break;
      case 'blog':
        Alert.alert('Yeni Blog', 'Yeni blog yazısı ekleme ekranı açılacak.');
        break;
      case 'users':
        Alert.alert('Yeni Kullanıcı', 'Yeni kullanıcı ekleme ekranı açılacak.');
        break;
      case 'support':
        Alert.alert('Destek Talepleri', 'Destek talepleri listesi açılacak.');
        break;
    }
  }, []);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.adminHeader}>
        <Text style={styles.adminTitle}>
          <Text style={styles.adminTitleBold}>KOAH </Text>
          <Text style={styles.adminTitleLight}>EGZERSİZ</Text>
        </Text>
        <View style={styles.adminIcons}>
          <Menu size={22} color={Colors.white} />
          <View style={styles.iconBadge}>
            <Mail size={20} color={Colors.white} />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>0</Text>
            </View>
          </View>
          <View style={styles.iconBadge}>
            <Bell size={20} color={Colors.white} />
            <View style={[styles.badge, { backgroundColor: '#FF9800' }]}>
              <Text style={styles.badgeText}>0</Text>
            </View>
          </View>
          <View style={styles.avatarSmall} />
          <Settings size={20} color={Colors.white} />
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.pageTitle}>Kontrol Paneli</Text>

        <View style={styles.breadcrumb}>
          <Settings size={14} color={Colors.textSecondary} />
          <Text style={styles.breadcrumbText}>Kontrol Paneli</Text>
        </View>

        <View style={styles.cardsRow}>
          <StatCardView card={statCards[0]} onAction={handleStatAction} />
          <StatCardView card={statCards[1]} onAction={handleStatAction} />
        </View>
        <View style={styles.cardsRow}>
          <StatCardView card={statCards[2]} onAction={handleStatAction} />
          <StatCardView card={statCards[3]} onAction={handleStatAction} />
        </View>

        <View style={styles.userListSection}>
          <Text style={styles.userListTitle}>Kullanıcı Listesi</Text>
          <View style={styles.userTable}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableHeaderCell, styles.cellName]}>Ad Soyad</Text>
              <Text style={[styles.tableHeaderCell, styles.cellDate]}>Doğum</Text>
              <Text style={[styles.tableHeaderCell, styles.cellStatus]}>Durum</Text>
            </View>
            {users.map((user) => (
              <View key={user.id} style={styles.tableRow} testID={`user-row-${user.id}`}>
                <Text style={[styles.tableCell, styles.cellName]}>{user.name}</Text>
                <Text style={[styles.tableCell, styles.cellDate]}>{user.birthDate}</Text>
                <View style={[styles.cellStatus, { alignItems: 'center' }]}>
                  <View
                    style={[
                      styles.statusBadge,
                      {
                        backgroundColor:
                          user.status === 'active' ? '#E8F5E9' : '#FFEBEE',
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.statusText,
                        {
                          color:
                            user.status === 'active' ? '#4CAF50' : '#F44336',
                        },
                      ]}
                    >
                      {user.status === 'active' ? 'Aktif' : 'Pasif'}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
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
  adminHeader: {
    backgroundColor: Colors.headerGreen,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  adminTitle: {
    fontSize: 18,
  },
  adminTitleBold: {
    fontWeight: '800' as const,
    color: Colors.white,
  },
  adminTitleLight: {
    fontWeight: '400' as const,
    color: 'rgba(255,255,255,0.85)',
  },
  adminIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  iconBadge: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -8,
    backgroundColor: Colors.cardRed,
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
  },
  badgeText: {
    color: Colors.white,
    fontSize: 9,
    fontWeight: '700' as const,
  },
  avatarSmall: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.white,
  },
  scrollView: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    padding: 16,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: '700' as const,
    color: Colors.text,
    marginBottom: 4,
  },
  breadcrumb: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: Colors.grayLight,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginBottom: 16,
  },
  breadcrumbText: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  cardsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  userListSection: {
    marginTop: 12,
  },
  userListTitle: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: Colors.text,
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  userTable: {
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: Colors.grayLight,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  tableHeaderCell: {
    fontSize: 13,
    fontWeight: '700' as const,
    color: Colors.text,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    alignItems: 'center',
  },
  tableCell: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  cellName: {
    flex: 2,
  },
  cellDate: {
    flex: 1.5,
  },
  cellStatus: {
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600' as const,
  },
});
