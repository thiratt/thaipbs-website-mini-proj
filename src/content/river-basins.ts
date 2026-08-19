export const THAILAND_BASIN_REGIONS = [
  { label: 'ลุ่มน้ำภาคเหนือ', color: '#4CAF50' },
  { label: 'ลุ่มน้ำภาคตะวันออกเฉียงเหนือ', color: '#FF9800' },
  { label: 'ลุ่มน้ำภาคกลาง', color: '#d2444b' },
  { label: 'ลุ่มน้ำภาคใต้', color: '#03A9F4' },
] as const

export const ISAN_RIVER_BASINS = [
  {
    id: 1,
    short: 'โขง',
    title: 'ลุ่มน้ำโขงตะวันออกเฉียงเหนือ',
    description:
      'ลุ่มน้ำโขงตะวันออกเฉียงเหนือมีความสำคัญอย่างยิ่งต่อการเกษตรกรรมและการประมงในพื้นที่ น้ำจากแม่น้ำโขงใช้ในการเพาะปลูกข้าว อ้อย และพืชเศรษฐกิจอื่นๆ รวมถึงการเลี้ยงสัตว์น้ำ นอกจากนี้ยังเป็นแหล่งน้ำดื่มและใช้ในครัวเรือนของประชาชนในพื้นที่',
    imageSrc: '/images/basins/mekong-basin.png',
  },
  {
    id: 2,
    short: 'มูล',
    title: 'ลุ่มน้ำมูล',
    description:
      'ลุ่มน้ำมูลมีความสำคัญอย่างยิ่งต่อการเกษตรกรรมและการประมงในพื้นที่ เนื่องจากเป็นแหล่งน้ำที่สำคัญสำหรับการปลูกข้าว อ้อย มันสำปะหลัง และพืชอื่นๆ อีกทั้งยังเป็นที่อยู่อาศัยของสัตว์น้ำหลากหลายชนิด ทำให้เป็นแหล่งทรัพยากรธรรมชาติที่สำคัญสำหรับชุมชนในพื้นที่',
    imageSrc: '/images/basins/mun-basin.png',
  },
  {
    id: 3,
    short: 'ชี',
    title: 'ลุ่มน้ำชี',
    description:
      'ลุ่มน้ำชีมีบทบาทสำคัญในด้านเกษตรกรรม การประมง และวิถีชีวิตของชุมชนในพื้นที่ น้ำจากลุ่มน้ำชีใช้ในการเพาะปลูกข้าว ซึ่งเป็นพืชเศรษฐกิจหลักของภาคตะวันออกเฉียงเหนือ รวมถึงการปลูกพืชอื่นๆ เช่น อ้อย มันสำปะหลัง และผักต่างๆ นอกจากนี้ยังเป็นแหล่งประมงน้ำจืดที่สำคัญ ซึ่งมีปลาและสัตว์น้ำหลากหลายชนิด',
    imageSrc: '/images/basins/chi-basin.png',
  },
] as const

export type IsanRiverBasin = (typeof ISAN_RIVER_BASINS)[number]

export const RIVER_STORY_VIDEOS = [
  { title: 'เรื่องราวจากสายน้ำ 01', src: 'https://www.youtube.com/embed/-mDqtZeul2s' },
  { title: 'เรื่องราวจากสายน้ำ 02', src: 'https://www.youtube.com/embed/OFkjTq93xFo' },
  { title: 'เรื่องราวจากสายน้ำ 03', src: 'https://www.youtube.com/embed/Eotc982Ngrw' },
  { title: 'เรื่องราวจากสายน้ำ 04', src: 'https://www.youtube.com/embed/en7VNTsU-SY' },
  { title: 'เรื่องราวจากสายน้ำ 05', src: 'https://www.youtube.com/embed/7F_S_0nUfvo' },
  { title: 'เรื่องราวจากสายน้ำ 06', src: 'https://www.youtube.com/embed/Eotc982Ngrw' },
] as const
