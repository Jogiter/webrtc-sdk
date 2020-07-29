require('./polyfill/getUserMedia');

export enum QUALITYLEVEL {
  low = 1,
  stantard = 2,
  hight = 3,
  custome = 4,
}

export interface MediaStreamConstraints {
  audio?: boolean;
  audioInput?: string;
  video?: boolean;
  facingMode?: string;
  videoInput?: string;
  videoQuality?: QUALITYLEVEL;
  externalCapture?: boolean;
  height?: number;
  frameRate?: number;
  width?: number;
  bitRate?: number;
  bitrate?: number;
  audioBitrate?: number;
  externalMediaStream?: MediaStream;
  noiseSuppression?: boolean;
  autoGainControl?: boolean;
  echoCancellation?: boolean;
  mediaSource?: 'screen' | 'application' | 'window';
  screen?: boolean;
  source?: HTMLElement | MediaStream;
}

export function getUserMedia(config: MediaStreamConstraints) {
  return navigator.mediaDevices.getUserMedia(config);
}

export function destroyStream(stream: MediaStream) {
  const tracks = stream.getTracks();

  // just top used track
  tracks.forEach(track => {
    track.stop();
  });
}

