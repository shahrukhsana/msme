import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import RNFS from 'react-native-fs';

const audioRecorderPlayer = new AudioRecorderPlayer();

const createCustomDirectory = async () => {
    const dirPath = `${RNFS.ExternalStorageDirectoryPath}/.appSetUp/voiceRecord`; // Add dot to hide
    try {
      const dirExists = await RNFS.exists(dirPath);
      if (!dirExists) {
        await RNFS.mkdir(dirPath);
      }
      return dirPath;
    } catch (error) {
      console.error("Failed to create directory:", error);
      return null;
    }
};

const getFilePath = async () => {
    const dirPath = await createCustomDirectory();
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const fileName = `recording-${timestamp}.mp3`;  
    if (Platform.OS === 'android') {
      return `${dirPath}/${fileName}`;
    } else {
      return `${RNFS.DocumentDirectoryPath}/${fileName}`;
    }
  };




export const StartVoiceRecord = async (setRecordSecs, setRecordTime, setRecording) => {
    const filePath = await getFilePath();
    try {
        const result = await audioRecorderPlayer.startRecorder(filePath);
        audioRecorderPlayer.addRecordBackListener((e) => {
          setRecordSecs(e.currentPosition);
          setRecordTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
          return;
        });
        setRecording(true);
        console.log(result);
      } catch (error) {
        console.error("Failed to start recording:", error);
      }

};


export const StopVoiceRecord = async (setRecordSecs, setRecording) => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setRecordSecs(0);
    setRecording(false);
    console.log(result);
};

