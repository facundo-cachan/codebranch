import {
  Alert,
  Linking,
  PermissionsAndroid,
  Platform,
  ToastAndroid,
} from 'react-native';

const geoLocation = async () => {
  if (Platform.OS === 'android' && Platform.Version < 23) {
    return true;
  }
  const hasPermission = await PermissionsAndroid.check(
    PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
  );
  if (hasPermission) {
    return true;
  }
    Alert.alert(
      'Please provide Backgroung Location Access',
      'To use this app go to app settings > Permissions > location and select "Allow all the time" option',
      [
        {
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
          text: 'Cancel',
        },
        { onPress: () => Linking.openSettings(), text: 'OK' },
      ],
    );

  const status = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );
  if (status === PermissionsAndroid.RESULTS.GRANTED) {
    return true;
  }
  if (status === PermissionsAndroid.RESULTS.DENIED) {
    ToastAndroid.show(
      'Location permission denied by user.',
      ToastAndroid.LONG,
    );
  } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
    ToastAndroid.show(
      'Location permission revoked by user.',
      ToastAndroid.LONG,
    );
  }
  return false;
};

export default geoLocation;
