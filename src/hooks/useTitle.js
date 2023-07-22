import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `${title} | Campus Navigator`
    },[title])
}


export default useTitle;
