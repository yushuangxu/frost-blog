import React,{useState,useEffect} from 'react'

interface TypewriterProps {
    text: string;
  }
  
const Typewriter:React.FC<TypewriterProps> = ({text})=>{
    const [displayText,setDisplayText] = useState<string>('')
    const [index,setIndex] = useState<number>(0)
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(index<text.length){
                setDisplayText(prevText=>prevText+text[index])
                setIndex(prevIndex=>prevIndex+1)
            }else{
                clearInterval(interval)
            }
        },100) // 控制打字速度,
        return ()=>clearInterval(interval)
    })
    return <span>
        {displayText}
    </span>
}
export default Typewriter