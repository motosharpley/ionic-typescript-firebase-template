import { IonContent, IonPage } from '@ionic/react';
import VideoTrimmer from '../components/VideoTrimmer';
import './Create.css';

const Create = () => {
  let preview = document.getElementById('preview');
  let recording = document.getElementById('recording');
  let startButton = document.getElementById('startButton');
  let stopButton = document.getElementById('stopButton');
  let downloadButton = document.getElementById('downloadButton');
  let logElement = document.getElementById('log');

  let recordingTimeMS = 5000;

  function log(msg) {
    logElement.innerHTML += msg + '\n';
  }

  function wait(delayInMS) {
    return new Promise((resolve) => setTimeout(resolve, delayInMS));
  }

  function startRecording(stream, lengthInMS) {
    let recorder = new MediaRecorder(stream);
    let data = [];

    recorder.ondataavailable = (event) => data.push(event.data);
    recorder.start();
    log(recorder.state + ' for ' + lengthInMS / 1000 + ' seconds...');

    let stopped = new Promise((resolve, reject) => {
      recorder.onstop = resolve;
      recorder.onerror = (event) => reject(event.name);
    });

    let recorded = wait(lengthInMS).then(
      () => recorder.state === 'recording' && recorder.stop()
    );

    return Promise.all([stopped, recorded]).then(() => data);
  }

  function stop(stream) {
    stream.getTracks().forEach((track) => track.stop());
  }

  if (startButton !== null) {
    startButton.addEventListener(
      'click',
      function () {
        navigator.mediaDevices
          .getUserMedia({
            video: true,
            audio: true,
          })
          .then((stream) => {
            preview.srcObject = stream;
            downloadButton.href = stream;
            preview.captureStream =
              preview.captureStream || preview.mozCaptureStream;
            return new Promise((resolve) => (preview.onplaying = resolve));
          })
          .then(() => startRecording(preview.captureStream(), recordingTimeMS)) //record the preview element media stream
          .then((recordedChunks) => {
            let recordedBlob = new Blob(recordedChunks, { type: 'video/webm' }); //upload to firestore from blob
            recording.src = URL.createObjectURL(recordedBlob);
            downloadButton.href = recording.src;
            downloadButton.download = 'RecordedVideo.webm';

            log(
              'Successfully recorded ' +
                recordedBlob.size +
                ' bytes of ' +
                recordedBlob.type +
                ' media.'
            );
          })
          .catch((error) => {
            if (error.name === 'NotFoundError') {
              log("Camera or microphone not found. Can't record.");
            } else {
              log(error);
            }
          });
      },
      false
    );
  }

  if (stopButton !== null) {
    stopButton.addEventListener(
      'click',
      function () {
        stop(preview.srcObject);
      },
      false
    );
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="homeContainer">
          <h2>Create</h2>
        </div>
        <select name="media-src" id="media-src">
          <option value="camera">Camera</option>
          <option value="file">File</option>
          <option value="gallery">Gallery</option>
        </select>
        <hr />
        <div className="left">
          <div id="startButton" className="button">
            Start Recording
          </div>
          <h2>Preview</h2>
          <video id="preview" width="468" height="240" autoPlay muted></video>
        </div>

        <div className="right">
          <div id="stopButton" className="button">
            Stop Recording
          </div>
          <h2>Recording</h2>
          <video id="recording" width="468" height="240" controls></video>
          <a id="downloadButton" className="button" href="/">
            Download
          </a>
        </div>
        <div className="bottom">
          <pre id="log"></pre>
        </div>
        <VideoTrimmer></VideoTrimmer>
      </IonContent>
    </IonPage>
  );
};
export default Create;
