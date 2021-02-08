export const noop:Function = () => {}

function download(url: string){
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

export function downloadBlob(blob: Blob){
  const url = window.URL.createObjectURL(blob);
  download(url);
}