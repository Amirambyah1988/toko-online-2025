await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
await faceapi.nets.faceRecognitionNet.loadFromUri('/models');

navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => video.srcObject = stream);