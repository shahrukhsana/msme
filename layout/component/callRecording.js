import CallRecord from 'react-native-call-record';

const startCallRecording = async () => {
  const permissionsGranted = await requestCallRecordingPermissions();

  if (permissionsGranted) {
    CallRecord.startRecording({
      // Additional configuration if needed
      outputFormat: 'mp3',
      audioSource: 'MIC', // Ensure this is set to properly capture audio
    }).then(() => {
      console.log('Recording started');
    }).catch(error => {
      console.error('Failed to start recording:', error);
    });
  } else {
    console.log("Permissions not granted");
  }
};

// Stop recording
const stopCallRecording = async () => {
  try {
    await CallRecord.stopRecording();
    console.log('Recording stopped');
  } catch (error) {
    console.error('Failed to stop recording:', error);
  }
};

// Trigger recording based on call events
import { DeviceEventEmitter } from 'react-native';

DeviceEventEmitter.addListener('incomingCall', () => {
  startCallRecording();
});

DeviceEventEmitter.addListener('outgoingCall', () => {
  startCallRecording();
});

DeviceEventEmitter.addListener('callEnded', () => {
  stopCallRecording();
});
