// import { useEffect, useState } from "react"


// const useOnlineStatus=()=>{
    
    //     const [onlineStatus, setOnlineStatus] = useState(true)
    //     //check if online
    
    //     useEffect(()=>{
        //         window.addEventListener("offline",()=>{
            //             setOnlineStatus(false)
            //         })
            //         window.addEventListener("online",()=>{
                //             setOnlineStatus(true)
                //         })
                
                //     },[])
                
                //     //boolean value 
                //     return onlineStatus;
                // }
                
                // export default useOnlineStatus;
 import{ useEffect, useState } from "react"
 import React from "react"
 const useOnlineStatus=()=>{
    const [onlineStatus,setOnlineStatus] = useState(true)
    
    useEffect(()=>{
        window.addEventListener("online",()=>{
            setOnlineStatus(true)
        })
        window.addEventListener("offline",()=>{
            setOnlineStatus(false)
        })
    })
    return onlineStatus;
 }
 export default useOnlineStatus;



//network => disable cache near "Throttling" button dropdown => offline
//chunking / code spliting /lazy loading /dynamic bundling / ondemand loading  

//css sass scss Styled-component bootstrap material-Ui chakra-Ui  Ant-Design Tailwind 