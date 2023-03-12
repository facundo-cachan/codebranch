import { StyleSheet } from 'react-native'

import { fonts } from '@styles/theme'

const text = {
  color: '#1471F8',
  ...fonts.big.bold
},
  styles = StyleSheet.create({
    card: {
      borderWidth: 0,
      display: 'flex',
      alignItems: 'center',
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%'
    },
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: 60,
      paddingHorizontal: 20,
      width: '100%',
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    items: {
      marginTop: 30,
    },
    writeTaskWrapper: {
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: '75%',
    },
    btn: {
      alignItems: 'center',
      backgroundColor: '#9DF69F',
      borderWidth: 1,
      borderColor: '#0E8810',
      borderRadius: 60,
      height: 40,
      justifyContent: 'center',
      width: 40,
    },
    text,
    textStriket: {
      ...text,
      textDecorationLine: 'line-through',
    },
  })

export default styles
