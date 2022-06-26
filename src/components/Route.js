import { useEffect, useState } from "react/cjs/react.development";


const Route = ({path, children}) => {
    
    const [currentPath, setCurrentPath] = useState('');    
    
    useEffect(()=>{
            const onLocationChange = ()=>{
                setCurrentPath(window.location.pathname);
            }
            window.addEventListener('popstate', onLocationChange);
            return ()=>{window.removeEventListener('popstate', onLocationChange)}
    },[]);

    if (window.location.pathname !== path){                     //the (window.location.pathname) in this logic espression could be interchanged with the piece of state (currentLocation), it wont matter.
        return null;
    }else{
        return children;
    }
}


export default Route