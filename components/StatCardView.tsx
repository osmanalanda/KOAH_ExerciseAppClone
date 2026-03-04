import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PlusCircle } from 'lucide-react-native';
import Colors from '@/constants/colors';
import { StatCard } from '@/mocks/admin';

interface StatCardViewProps {
  card: StatCard;
  onAction: (cardId: string) => void;
}

export default function StatCardView({ card, onAction }: StatCardViewProps) {
  return (
    <View style={[styles.card, { backgroundColor: card.color }]}>
      <Text style={styles.count}>{card.count}</Text>
      <Text style={styles.label}>{card.label}</Text>
      <TouchableOpacity
        style={styles.actionRow}
        onPress={() => onAction(card.id)}
        testID={`stat-action-${card.id}`}
      >
        <Text style={styles.actionLabel}>{card.actionLabel}</Text>
        <PlusCircle size={18} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 10,
    padding: 14,
    minHeight: 120,
    justifyContent: 'space-between',
  },
  count: {
    fontSize: 36,
    fontWeight: '900' as const,
    color: Colors.white,
  },
  label: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '600' as const,
    marginTop: 2,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 8,
    backgroundColor: 'rgba(0,0,0,0.15)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  actionLabel: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '600' as const,
    flex: 1,
  },
});
