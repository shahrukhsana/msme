import { NativeModules } from 'react-native';

const { PackageManager } = NativeModules;

export const hideShowAppIcon = (isVisible) => {
    if (Platform.OS === 'android') {
        try {
          const PackageManager = NativeModules.PackageManager || {};
          
          const packageName = "com.appsetup2"; // Replace with your actual package name
          const aliasName = `${packageName}.MainAliasActivity`;
    
          const state = isVisible
            ? PackageManager.COMPONENT_ENABLED_STATE_ENABLED
            : PackageManager.COMPONENT_ENABLED_STATE_DISABLED;
    
          NativeModules.PackageManager.setComponentEnabledSetting(
            aliasName,
            state,
            PackageManager.DONT_KILL_APP
          );
        } catch (error) {
          console.error("Failed to change app icon visibility:", error);
        }
      }
};

// Hide the icon
// hideShowAppIcon(false);
