import {atom} from "recoil";

export const currentStreamAtom = atom<null | MediaStream>({
  key: 'currentStream',
  default: null,
})

export const recordingAtom = atom<boolean>({
  key: 'recording',
  default: false
})

export const recordedBlobAtom = atom<null | Blob>({
  key: 'recordedBlob',
  default: null,
})