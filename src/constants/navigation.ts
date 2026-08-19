import type { NavItem, SectionName } from '@/types/navigation'

export const NAV_ITEMS: Array<NavItem> = [
  { label: 'หน้าหลัก' },
  { label: 'แล้งคืออะไร' },
  { label: 'ผลกระทบ' },
  { label: 'สถิติ' },
  { label: 'แล้งเราไม่เท่ากัน' },
  { label: 'งบประมาณ' },
  { label: 'ลุ่มน้ำไทย' },
  { label: 'ลุ่มน้ำอีสาน' },
  { label: 'ประเพณีในหน้าแล้ง' },
  { label: 'อาหารรับมือแล้ง' },
  { label: 'การฟื้นฟู' },
]

export const SECTION_NAMES: Array<SectionName> = NAV_ITEMS.map(
  (item) => item.label as SectionName,
)
