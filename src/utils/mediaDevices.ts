declare global {
  interface MediaDevices {
    getDisplayMedia(constraints?: MediaStreamConstraints): Promise<MediaStream>;
  }

  // if constraints config still lose some prop, you can define it by yourself also
  interface MediaTrackConstraintSet {
    displaySurface?: ConstrainDOMString;
    logicalSurface?: ConstrainBoolean;
    // more....
  }
}

export const getDisplayMedia = (constraints?: MediaStreamConstraints) => {
  return navigator.mediaDevices.getDisplayMedia(constraints)
}

export const getUserMedia = (constraints: MediaStreamConstraints):Promise<MediaStream> => {
  return new Promise<MediaStream>((resolve, reject) => {
    navigator.getUserMedia(constraints, function(stream){
      resolve(stream);
    }, function(error){
      reject(error)
    })
  })
}

export const isPermissionDeniedError = (error: Error) => {
  if(error.name === "NotAllowedError"){
    return true;
  }
  return false;
}