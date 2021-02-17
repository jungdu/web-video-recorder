export const noop: Function = () => {};

function download(url: string) {
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = 'recorded.webm';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 100);
}

export function downloadBlob(blob: Blob) {
  const url = window.URL.createObjectURL(blob);
  download(url);
}

// webm의 버그인지는 모르겠지만 duration이 안나오는 현상을 해결하는 방법
export function fixInfinityDuration(video: HTMLVideoElement) {
  if (video.duration === Infinity) {
    video.currentTime = 1e101;
    setTimeout(() => {
      video.currentTime = 0.01;
    }, 300);
  }
}
