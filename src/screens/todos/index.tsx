/**
 * Todos Screen
 * Use like template to create news screens
 *
 * @screen
 */

import { useContext, useEffect, useState } from 'react'
import { Keyboard, Text, TextInput, View } from 'react-native'

import { Cards, Icons, ScrollView, Texts } from '@components'
import { faAdd, faCheckCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from '@providers/providerContext'
import styles from './styles'

import type { Task } from '../../interfaces'

Keyboard.dismiss()

const TodosScreen = () => {
  const { state, dispatch } = useContext(AppContext)
  const [task, setTask] = useState(null)

  useEffect(() => {
    setTask(null)
  }, [state])

  return (
    <View style={styles.container}>
      <ScrollView.Simple styles={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Todo list</Text>
          <View style={styles.items}>
            {
              state.map(({ completed, id, text }: Task) => (
                <Cards.BorderRounded key={id} style={{
                  card: styles.card
                }}>
                  <Texts.Default text={text} style={completed ? styles.textStriket : styles.text} />
                  <Icons.FontAwesome5 name={faCheckCircle} color={completed ? "secondary" : "primary"} size="big" onPress={() => dispatch({ type: 'COMPLETE', task: { id } })} />
                  <Icons.FontAwesome5 name={faMinusCircle} color="secondary" size="big" onPress={() => dispatch({ type: 'REMOVE', task: { id } })} />
                </Cards.BorderRounded>
              ))
            }
          </View>
        </View>
      </ScrollView.Simple>
      <View style={styles.writeTaskWrapper}>
        <TextInput style={styles.input}
          placeholder={'Write a task'} value={task?.text}
          onChangeText={(text: any) => setTask({ id: state.length, text })}
        />
        <Icons.FontAwesome5 name={faAdd} color="primary" size="big"
          disabled={!Boolean(task)}
          onPress={() => dispatch({ type: 'ADD', task })}
          style={{ ...styles.btn, display: task ? 'flex' : 'none', }}
        />
      </View>
    </View >
  )
}

export default TodosScreen

