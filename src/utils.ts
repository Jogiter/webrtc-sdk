export function snapshot(video: HTMLVideoElement) {
  const canvas = document.createElement('canvas');
  // canvas.width = 480;
  // canvas.height = 360;
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.style.display = 'none';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  // todo
}

/**
 * 请求一个可用的媒体输入和输出设备的列表，例如麦克风，摄像机，耳机设备等。 返回的 Promise 完成时，会带有一个描述设备的 MediaDeviceInfo 的数组。
 *
 * ```ts
 *  enumerateDevices().then(mediaDevices => {
 *    const audioinputs = mediaDevices.filter(mediaDevice => mediaDevices.kind === 'audioinput')
 *    const videoinputs = mediaDevices.filter(mediaDevice => mediaDevices.kind === 'videoinput')
 *    const audiooutputs = mediaDevices.filter(mediaDevice => mediaDevices.kind === 'audiooutput')
 *  });
 * ```
 */
export function enumerateDevices() {
  return navigator.mediaDevices.enumerateDevices()
}