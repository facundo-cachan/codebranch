import { showMessage } from 'react-native-flash-message'

import wait from '@utils/_wait'

const delay = 1000,
  status = 200
const fetcher = async ({ url, data }: { url: string; data: any }) => {
  await wait(delay)
  try {
    switch (url) {
      case 'apple':
      case 'facebook':
      case 'google':
      case 'login':
        console.log('fetcher', data)
        return { data: require('../mocks/users').user, status }
      case 'logout':
        return { data: {}, status }
      case 'register':
        const { user } = require('../mocks/users')
        return { data: user, status }
      case 'recoveryPassword':
        return { data: user, status }
      case 'roles/0':
        return { data: require('../mocks/roles').detail, status }
      case 'roles':
        return { data: require('../mocks/roles').roles, status }
      case 'categories/0':
        return { data: require('../mocks/categories').detail, status }
      case 'categories/detail/0':
        return { data: require('../mocks/categories').items, status }
      case 'categories':
        return { data: require('../mocks/categories').categories, status }
      case 'suscriptions':
        return { data: require('../mocks/suscriptions').suscriptions, status }
      default:
        showMessage({
          duration: 3000,
          message: 'No data to show',
          type: 'danger',
        })
        return { data: null, status: 305 }
    }
  } catch (error) {
    return error
  }
}

export default fetcher
