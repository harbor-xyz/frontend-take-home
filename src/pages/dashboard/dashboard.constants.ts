import TestnetView from '@/components/organisms/testnetsView'
import MembersView from '@/components/organisms/membersView'
import ProjectKeyView from '@/components/organisms/projectKeyView'

type TabViewType = {
  [key: string]: () => JSX.Element
}

export const TabViewMap: TabViewType = {
  "Testnets": TestnetView,
  "Members": MembersView,
  "Project Key": ProjectKeyView
}
