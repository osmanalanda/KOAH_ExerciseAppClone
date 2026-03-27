export interface StatCard {
  id: string;
  count: number;
  label: string;
  actionLabel: string;
  color: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  birthDate: string;
  status: 'active' | 'inactive';
}

export const statCards: StatCard[] = [
  {
    id: 'videos',
    count: 14,
    label: 'Toplam Eğitim Videosu',
    actionLabel: 'Yeni Video Ekle',
    color: '#2196F3',
  },
  {
    id: 'blog',
    count: 1,
    label: 'Blog Yazısı',
    actionLabel: 'Yeni Blog Yazısı Ekle',
    color: '#4CAF50',
  },
  {
    id: 'users',
    count: 0,
    label: 'Kullanıcılar',
    actionLabel: 'Yeni Kullanıcı Ekle',
    color: '#FF9800',
  },
  {
    id: 'support',
    count: 0,
    label: 'Destek Talepleri',
    actionLabel: 'Talepleri Listele',
    color: '#F44336',
  },
];

export const users: User[] = [
  {
    id: '1',
    name: 'Ahmet Yılmaz',
    email: 'ahmet@example.com',
    birthDate: '15.03.1965',
    status: 'active',
  },
  {
    id: '2',
    name: 'Fatma Demir',
    email: 'fatma@example.com',
    birthDate: '22.07.1958',
    status: 'active',
  },
  {
    id: '3',
    name: 'Mehmet Kaya',
    email: 'mehmet@example.com',
    birthDate: '10.11.1970',
    status: 'inactive',
  },
];
