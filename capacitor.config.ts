import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.fitbulk.app",
  appName: "FitBulk",
  webDir: "out",
  server: {
    androidScheme: "https",
    iosScheme: "https",
  },
  ios: {
    contentInset: "automatic",
    preferredContentMode: "mobile",
    scheme: "FitBulk",
    backgroundColor: "#f5f5f3",
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: "#f5f5f3",
      showSpinner: false,
      iosSpinnerStyle: "small",
      spinnerColor: "#0a0a0a",
      launchFadeOutDuration: 300,
    },
    StatusBar: {
      style: "DARK",
      backgroundColor: "#f5f5f3",
    },
    Keyboard: {
      resize: "body",
      resizeOnFullScreen: true,
    },
  },
};

export default config;
