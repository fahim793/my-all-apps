import { useEffect, useState } from "react"
import axios from "axios";


const useApps = () => {
    const [Apps, setApps] = useState([])

    useEffect(() => {
        axios('./data.json').then(data => setApps(data))
    }, [])

    return {Apps};

}

export default useApps;