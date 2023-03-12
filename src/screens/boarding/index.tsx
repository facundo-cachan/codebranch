import { Image, Text, TouchableOpacity, View } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'

import styles from './styles'

import type { BoardingScreenProps } from '../types'

const backgroundColor = '#000'
const Dots = ({ selected }: { selected: boolean }) => {
  let backgroundColor: string = selected
    ? '#67F7F2'
    : '#0590B9';
  return (
    <View
      style={{
        backgroundColor,
        height: 6,
        marginHorizontal: 3,
        width: 6,
      }}
    />
  );
};
const Skip = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={styles.text}>Skip</Text>
  </TouchableOpacity>
);
const Next = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={styles.text}>Next</Text>
  </TouchableOpacity>
);
const Done = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={styles.text}>Done</Text>
  </TouchableOpacity>
);
const OnboardingScreen = ({ navigation }: BoardingScreenProps) => (
  <Onboarding
    SkipButtonComponent={Skip}
    NextButtonComponent={Next}
    DoneButtonComponent={Done}
    DotComponent={Dots}
    onSkip={() => {
      navigation.navigate('Todos')
    }}
    onDone={() => navigation.navigate('Todos')}
    pages={[
      {
        backgroundColor,
        image: <Image source={require('@assets/img/sw.webp')} />,
        title: 'Software Development.',
        subtitle: 'Managing developers is not a task for everyone. We provide dedicated teams of developers for your projects under our technical direction and management.',
      },
      {
        backgroundColor,
        image: <Image source={require('@assets/img/is.webp')} />,
        title: 'Information  Security',
        subtitle: 'With our Secure Code Review service, we help to write better and safer code by doing SAST. This consists in reviewing the code written to look for vulnerabilities in the product.',
      },
      {
        backgroundColor,
        image: <Image source={require('@assets/img/rs.webp')} />,
        title: 'Recruitment Services',
        subtitle: 'Senior or junior, we find the talents you´re looking for.Additionally, we can help you tune your job proposal to be effective in the search.',
      },
      {
        backgroundColor,
        image: <Image source={require('@assets/img/fc.webp')} />,
        title: 'Fractional CTO',
        subtitle: 'A fractional CTO(Chief Technology Officer) is a  part- time or temporary CTO who gives a business on - demand strategic and technical guidance',
      },
    ]}
  />
)

export default OnboardingScreen;
