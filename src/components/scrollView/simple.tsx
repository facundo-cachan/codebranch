import { ScrollView } from 'react-native'

const Simple = ({ children, styles }: any) => (
  <ScrollView
    keyboardShouldPersistTaps='handled'
    contentContainerStyle={styles || {}}
    contentInsetAdjustmentBehavior="automatic">
    {children}
  </ScrollView>
)

export default Simple
