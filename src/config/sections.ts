export const SECTIONS = [
  { id: 'home', label: 'หน้าหลัก' },
  { id: 'drought-overview', label: 'แล้งคืออะไร' },
  { id: 'drought-impacts', label: 'ผลกระทบ' },
  { id: 'temperature-trend', label: 'สถิติ' },
  { id: 'drought-inequality', label: 'แล้งเราไม่เท่ากัน' },
  { id: 'drought-budget', label: 'งบประมาณ' },
  { id: 'thailand-basins', label: 'ลุ่มน้ำไทย' },
  { id: 'isan-basins', label: 'ลุ่มน้ำอีสาน' },
  { id: 'drought-traditions', label: 'ประเพณีในหน้าแล้ง' },
  { id: 'drought-food', label: 'อาหารรับมือแล้ง' },
  { id: 'drought-recovery', label: 'การฟื้นฟู' },
] as const

export type SectionId = (typeof SECTIONS)[number]['id']

export const SECTION_IDS = SECTIONS.map((section) => section.id) as SectionId[]
