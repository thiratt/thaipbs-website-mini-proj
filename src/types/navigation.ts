export interface NavItem {
  label: string
}

export interface NavigationBarProps {
  activeSection?: string
  onNavigate?: (sectionName: SectionName) => void
}

export type SectionName =
  | 'หน้าหลัก'
  | 'แล้งคืออะไร'
  | 'วัฏจักรฤดูแล้ง'
  | 'สถิติ'
  | 'แล้งเราไม่เท่ากัน'
  | 'ผลกระทบ'
  | 'ลุ่มน้ำไทย'
  | 'ลุ่มน้ำอีสาน'
  | 'ประเพณีในหน้าแล้ง'
  | 'อาหารรับมือแล้ง'
  | 'งบประมาณ'
  | 'การฟื้นฟู'

export type SectionRefs = Record<
  SectionName,
  React.RefObject<HTMLElement | null>
>
