function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { Camera as VisionCamera, useFrameProcessor } from 'react-native-vision-camera';
import { useRunInJS } from 'react-native-worklets-core';
import { scanFaces } from './scanFaces';
export const Camera = /*#__PURE__*/forwardRef(function Camera(props, ref) {
  const {
    callback,
    options,
    device
  } = props;
  // @ts-ignore
  const useWorklets = useRunInJS(data => {
    callback(data);
  }, []);
  const frameProcessor = useFrameProcessor(frame => {
    'worklet';

    const data = scanFaces(frame, options);
    // @ts-ignore
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useWorklets(data);
  }, []);
  return !!device && /*#__PURE__*/React.createElement(VisionCamera, _extends({
    ref: ref,
    frameProcessor: frameProcessor
  }, props));
});
//# sourceMappingURL=index.js.map