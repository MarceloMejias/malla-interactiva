import Head from 'next/head';

export default function AppleSplashScreens() {
  return (
    <Head>
      {/* iOS Splash Screens */}
      <link 
        rel="apple-touch-startup-image" 
        media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" 
        href="apple-touch-icon.png" 
      />
      <link 
        rel="apple-touch-startup-image" 
        media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" 
        href="apple-touch-icon.png" 
      />
      <link 
        rel="apple-touch-startup-image" 
        media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" 
        href="apple-touch-icon.png" 
      />
      <link 
        rel="apple-touch-startup-image" 
        media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" 
        href="apple-touch-icon.png" 
      />
    </Head>
  );
}
