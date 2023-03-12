import BackgroundService from 'react-native-background-actions';
import Geolocation from 'react-native-geolocation-service';

import geoLocation from '@utils/permissions/android/geoLocation';
import wait from '@utils/_wait';

const getLocation = async (delay: number) => {
  await new Promise(async () => {
    for (let i = 0; BackgroundService.isRunning(); i++) {
      const hasPermission = geoLocation();
      if (!hasPermission) {
        return;
      }
      Geolocation.getCurrentPosition(
        async position => {
          console.log(position);
          console.log(
            '🧭 ~ file: geoLocation.tsx ~ line 18 ~ position',
            position,
          );
        },
        (e: any) => {
          console.log('🚨', e);
        },
        {
          accuracy: {
            android: 'high',
            ios: 'best',
          },
          distanceFilter: 0,
          enableHighAccuracy: true,
          forceLocationManager: true,
          forceRequestLocation: true,
          showLocationDialog: true,
        },
      );
      wait(delay);
    }
  });
};

export default getLocation;
