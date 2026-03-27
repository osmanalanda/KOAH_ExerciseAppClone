export interface Exercise {
  id: string;
  category: string;
  categoryLabel: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  timeOfDay: 'sabah' | 'akşam' | 'genel';
}

export const exercises: Exercise[] = [
  {
    id: '1',
    category: 'isinma',
    categoryLabel: 'ISINMA HAREKETLERİ',
    title: 'Isınma Hareketleri',
    description:
      'Bugünkü egzersize hazırmıyız?\nIsınma hareketleri sayesinde bedenimizdeki kan dolaşımı artar. Isınma sadece bedeni değil aynı zamanda zihnimizide egzersize ayarlar.\nDikkat!\nTüm egzersizleri gerçekleştirirken burnunuzdan nefes alıp ağzınızdan verin. Egzersiz sırasında nefes nefese kalırsanız veya kendinizi kötü hissederseniz egzersizi durdurun.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop',
    duration: '5 dakika',
    timeOfDay: 'sabah',
  },
  {
    id: '2',
    category: 'nefes',
    categoryLabel: 'NEFES EGZERSİZİ -1 - SABAH',
    title: 'Nefes egzersizi I ( Oturarak )',
    description:
      'Bu egzersizi bir sandalyede oturarak yapabilirsiniz. Egzersizi 5 dakika süresince yapmanız tavsiye edilmektedir fakat egzersizi yaparken başınız döner ya da kendinizi iyi hissetmez iseniz egzersizi sonlandırınız.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
    duration: '5 dakika',
    timeOfDay: 'sabah',
  },
  {
    id: '3',
    category: 'nefes',
    categoryLabel: 'NEFES EGZERSİZİ -2 - AKŞAM',
    title: 'Nefes egzersizi II ( Ayakta Olan )',
    description:
      'Bu egzersizi bir sandalyede oturarak yada ayakta yapabilirsiniz. Egzersizi 5 dakika süresince yapmanız tavsiye edilmektedir fakat egzersizi yaparken başınız döner ya da kendinizi iyi hissetmez iseniz egzersizi sonlandırınız.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
    duration: '5 dakika',
    timeOfDay: 'akşam',
  },
  {
    id: '4',
    category: 'guclendirme',
    categoryLabel: 'GÜÇLENDİRME EGZERSİZİ -1',
    title: 'Güçlendirme Egzersizi I (Üst Vücut)',
    description:
      'Bu egzersiz üst vücut kaslarını güçlendirmeye yöneliktir. Hafif ağırlıklar veya su şişeleri kullanarak yapabilirsiniz. Her hareketi 10 tekrar olarak 3 set yapınız.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    duration: '10 dakika',
    timeOfDay: 'sabah',
  },
  {
    id: '5',
    category: 'guclendirme',
    categoryLabel: 'GÜÇLENDİRME EGZERSİZİ -2',
    title: 'Güçlendirme Egzersizi II (Alt Vücut)',
    description:
      'Bu egzersiz alt vücut kaslarını güçlendirmeye yöneliktir. Sandalyeye tutunarak yapabilirsiniz. Her hareketi 10 tekrar olarak 3 set yapınız.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop',
    duration: '10 dakika',
    timeOfDay: 'akşam',
  },
];

export const categories = [
  { id: 'isinma', label: 'Isınma Hareketleri', color: '#0D9B6A' },
  { id: 'nefes', label: 'Nefes Egzersizleri', color: '#2DD4A0' },
  { id: 'guclendirme', label: 'Güçlendirme Egzersizleri', color: '#0A7D55' },
];
