"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scanFaces = scanFaces;
var _reactNativeVisionCamera = require("react-native-vision-camera");
var _reactNative = require("react-native");
const plugin = _reactNativeVisionCamera.VisionCameraProxy.initFrameProcessorPlugin('scanFaces');
const LINKING_ERROR = `The package 'react-native-vision-camera-v3-face-detection' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
function scanFaces(frame, options) {
  'worklet';

  if (plugin == null) throw new Error(LINKING_ERROR);
  // @ts-ignore
  return options ? plugin.call(frame, options) : plugin.call(frame);
}
//# sourceMappingURL=scanFaces.js.map