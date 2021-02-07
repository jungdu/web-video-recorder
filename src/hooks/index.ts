import { useEffect, useRef, useState } from "react"

export const useDuration = () => {
  const intervalRef = useRef<NodeJS.Timeout|null>(null);
  const [counting, setCounting] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);

  useEffect(() => {
    if(counting){
      if(!intervalRef.current){
        intervalRef.current = setInterval(()=> {
          setDuration(curVal => curVal + 1);
        }, 1000);
      }else{
        throw new Error("Interval is already exist");
      }
    }else{
      if(intervalRef.current){
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setDuration(0);
    }
  }, [counting])

  return {
    setCounting,
    duration
  }
}