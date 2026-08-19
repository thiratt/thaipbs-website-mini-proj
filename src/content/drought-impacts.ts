export interface DroughtImpact {
  iconSrc: string
  iconAlt: string
  text: string
}

export const DROUGHT_IMPACTS: DroughtImpact[] = [
  {
    iconSrc: '/images/impacts/seedling.png',
    iconAlt: 'ต้นกล้า',
    text: 'ผลผลิตทางการเกษตรลดลง ไม่เพียงพอต่อการบริโภค และการเลี้ยงปศุสัตว์',
  },
  {
    iconSrc: '/images/impacts/soil.png',
    iconAlt: 'ดิน',
    text: 'เกิดการกัดเซาะ ทัดกร่อนภูมิทัศน์ พื้นดินแห้งแล้งและเกิดการพังทลายของผิวดิน',
  },
  {
    iconSrc: '/images/impacts/wind.png',
    iconAlt: 'ลม',
    text: 'เกิดฝุ่นละออง พายุฝุ่น เพราะพื้นดินแห้งแล้งขาดน้ำ',
  },
  {
    iconSrc: '/images/impacts/water.png',
    iconAlt: 'น้ำ',
    text: 'ประชาชนเกิดความอดอยากเนื่องจากการขาดน้ำ ในการอุปโภคบริโภค',
  },
  {
    iconSrc: '/images/impacts/nature.png',
    iconAlt: 'ธรรมชาติ',
    text: 'เกิดความเสียหายต่อที่อยู่อาศัยของสัตว์ ที่ได้รับผลกระทบทั้งบนบกและในน้ำ',
  },
  {
    iconSrc: '/images/impacts/disease.png',
    iconAlt: 'โรคระบาด',
    text: 'เกิดภาวะขาดน้ำ ขาดสารอาหาร และเพิ่มโอกาสเกิดโรคระบาด',
  },
  {
    iconSrc: '/images/impacts/migration.png',
    iconAlt: 'การอพยพ',
    text: 'เกิดการอพยพย้ายถิ่นของประชากร',
  },
  {
    iconSrc: '/images/impacts/hydropower.png',
    iconAlt: 'โรงไฟฟ้าพลังน้ำ',
    text: 'ผลผลิตกระแสไฟฟ้าลดลง เนื่องจากการไหลของน้ำผ่านเขื่อนลดลง',
  },
  {
    iconSrc: '/images/impacts/factory.png',
    iconAlt: 'โรงงาน',
    text: 'การประกอบการด้านอุตสาหกรรมต้องหยุดชะงัก เพราะขาดแคลนน้ำที่ใช้ในกระบวนการผลิต',
  },
  {
    iconSrc: '/images/impacts/wildfire.png',
    iconAlt: 'ไฟป่า',
    text: 'เพิ่มโอกาสการเกิดไฟป่าในช่วงเกิดภัยแล้ง',
  },
]
