import CallLogs from 'react-native-call-log';

export const getCallLogs = async () => {
  
  
  try {    
    // Fetch all call logs
    const logs = await CallLogs.loadAll();

    // Limit to the first 10 logs
    // const limitedLogs = logs.slice(0, 10);

    // console.log(logs);
    return logs;


  } catch (error) {
    return [];
    // console.error("Failed to load call logs:", error);
  }
  
};