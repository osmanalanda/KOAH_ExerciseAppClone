import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Colors from '@/constants/colors';

interface ReadyDialogProps {
  visible: boolean;
  onConfirm: () => void;
}

export default function ReadyDialog({ visible, onConfirm }: ReadyDialogProps) {
  return (
    <Modal transparent visible={visible} animationType="fade" testID="ready-dialog">
      <View style={styles.overlay}>
        <View style={styles.dialog}>
          <Text style={styles.greeting}>Merhaba</Text>
          <Text style={styles.question}>Hazırmıyız ?</Text>
          <TouchableOpacity
            style={styles.okButton}
            onPress={onConfirm}
            testID="ready-dialog-ok"
          >
            <Text style={styles.okText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: Colors.overlay,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialog: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    paddingVertical: 32,
    paddingHorizontal: 40,
    alignItems: 'center',
    minWidth: 260,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '800' as const,
    color: Colors.text,
    marginBottom: 8,
  },
  question: {
    fontSize: 17,
    color: Colors.textSecondary,
    marginBottom: 24,
  },
  okButton: {
    backgroundColor: Colors.dialogBlue,
    paddingHorizontal: 36,
    paddingVertical: 10,
    borderRadius: 8,
    alignSelf: 'flex-end',
  },
  okText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '700' as const,
  },
});
