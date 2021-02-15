function addZeroPadding(num: number): string {
  if (num < 10) {
    return `0${num}`;
  }
  return `${num}`;
}

export function formatMinSec(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const newSeconds = seconds % 60;
  return `${addZeroPadding(minutes)}:${addZeroPadding(newSeconds)}`;
}
