# react-native-offline-screen

react-native-offline-screen is a React-Natvie base library for dealing with Offline status of ios/Android Devices.

## NOTE 
This package in on beta version,And still in Development Mode.

## ScreenShoots

<img src="https://github.com/Bhagirihi/react-native-offline-screen/blob/Master/Screenshoots/Normal.png?raw=false" width="200px">
<img src="https://github.com/Bhagirihi/react-native-offline-screen/blob/Master/Screenshoots/Offline.png?raw=false" width="200px">

<!-- ![Normal App Screen](https://github.com/Bhagirihi/react-native-offline-screen/blob/Master/Screenshoots/Normal.png?raw=false)

![React-native-offline-screen](https://github.com/Bhagirihi/react-native-offline-screen/blob/Master/Screenshoots/Offline.png?raw=false) -->



## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) or [yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable) to install this Package.

This library uses [@react-native-community/netinfo](https://github.com/react-native-netinfo/react-native-netinfo) behind the scenes, which contains native code, so you need to install it.

install the library using either npm:
```bash̀
npm install react-native-offline-screen
npm install --save @react-native-community/netinfo

cd ios
pod install
```
or yarn:
```bash
yarn add react-native-offline-screen
yarn add @react-native-community/netinfo

cd ios
pod install
```

## Usage

```python
import OfflineScreen from 'react-native-offline-screen'; 
```
```python

 render() {
    return (
      rest of the code...
         <OfflineScreen />
      rest of the code...
           )
    }
 ```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.