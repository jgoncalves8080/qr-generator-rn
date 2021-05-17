import { CameraRoll } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';

const saveImage = async ({ url }) => {
  let cameraPermissions = await Permissions.getAsync(Permissions.CAMERA_ROLL);
  if (cameraPermissions.status !== 'granted') {
    cameraPermissions = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  }

  if (cameraPermissions.status === 'granted') {
    FileSystem.downloadAsync(
      url,
      FileSystem.documentDirectory + Math.random() * 1000 + '.jpg'
    )
      .then(({ uri }) => {
        CameraRoll.saveToCameraRoll(uri);
        alert('Image save to gallery');
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    alert('Requires camera roll permmission');
  }

  return;
};

export default saveImage;
