import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import LoadingMessages from '../components/LoadingMessages'
import './Redirect.css'

export default function Redirect() {
    const smurl = useParams()
    const [isError, setIsError] = useState(false)
    const [loading, setLoading] = useState(true)

    document.title = 'SmURL service redirecting ...'
    useEffect(()=> {    
        (async() => {
            setLoading(true)            
            let cancel 
            try {
                const response = await axios({
                    method: 'GET',
                    url: `${process.env.REACT_APP_SERVER_URL}/${smurl.id}`,
                    cancelToken: new axios.CancelToken(c => (cancel = c))
                })                                
                setLoading(false)
                window.location.href = response.data.data[0].url
            } catch (error) {
                if(axios.isCancel(error)) {
                    setLoading(false)
                }
                setIsError(true)
            }
            return () => cancel()
        })()
    },[smurl.id])
  return (
    <>
    <div className='container'>                
        {loading
        ?
        <h1><LoadingMessages /></h1>
        :
        null
        }
        {isError
        ?
        <h1>Your SmURL was not found. Create a new one <Link to='/'>here.</Link></h1>
        :
        null
        }
    </div>
    </>
    
  )
}
