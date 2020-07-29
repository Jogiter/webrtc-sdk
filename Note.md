# navigator.getUserMedia: promise

>返回的promise对象可能既不会resolve也不会reject，因为用户不是必须选择允许或拒绝。

`navigator.getUserMedia` 已更名为 `MediaDevices.getUserMedia()`。 只是为了向下兼容。

```js
// async/await
async function getMedia(constraints) {
  let stream = null;

  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    /* use the stream */
  } catch(err) {
    /* handle the error */
  }
}

// promise
navigator.mediaDevices.getUserMedia(constraints)
.then(function(stream) {
  /* use the stream */
})
.catch(function(err) {
  /* handle the error */
});
```

>[mediaDevices 兼容性](https://caniuse.com/#search=mediaDevices)

# adapter.js（195 KB） 从 sdk 中移除

在Chrome（版本号47-52）中, 这种基于Promise的接口只能通过 [adapter.js](https://github.com/webrtc/adapter) 提供, 或者使用 `flag chrome://flags/#enable-experimental-web-platform-features` 来开启。从版本53开始，这种基于Promise的接口被默认开启，但仍未在navigator中提供。

>[adapter.js](https://github.com/webrtcHacks/adapter)