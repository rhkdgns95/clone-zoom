console.log("hello world");

const myVideo = document.createElement("video");
myVideo.muted = true;

let myVideoStream;

navigator.mediaDevices
  .getUserMedia({
    audio: true,
    video: true,
  })
  .then((stream) => {
    myVideoStream = stream;
    addVideoStream(myVideo, stream);
    console.log("stream: ", stream);
  });

const addVideoStream = (videElement, stream) => {
  videElement.srcObject = stream;
  videElement.addEventListener("loadedmetadata", () => {
    videElement.play();
  });
  document.getElementById("video-grid").append(myVideo);
};
