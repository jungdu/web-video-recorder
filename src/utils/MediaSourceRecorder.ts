export default class MediaSourceRecorder {
  recordType = "video/webm;codecs=vp9,opus";
  mediaType = "video/webm";
  recordedBlobs:BlobPart[] = [];
  mediaRecorder:MediaRecorder; 

  constructor(stream: MediaStream, onStop: (blob: Blob) => void){
    this.mediaRecorder = new MediaRecorder(stream, {
      mimeType: this.recordType,
    });

    this.mediaRecorder.onstop = () => {
      onStop(new Blob(this.recordedBlobs, {type: this.mediaType}));
    }

    this.mediaRecorder.ondataavailable = (event) => {
      console.log("recording... size " + event.data.size);
      if(event.data && event.data.size > 0){
        this.recordedBlobs.push(event.data);
      }
    }
  };

  start(){
    this.mediaRecorder.start();
  }
  
  stop(){
    this.mediaRecorder.stop();
  }
}