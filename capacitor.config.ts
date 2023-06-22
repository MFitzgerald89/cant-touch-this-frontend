import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: "Can't Touch This",
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
