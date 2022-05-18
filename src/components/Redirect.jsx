import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Redirect() {
    const smurl = useParams()
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(()=> {    
        (async() => {
            setLoading(true)
            // const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/${smurl.id}`)

            // if(response.status === 200) {                                
            //     setMessage('This might take a while. Loading....')
            //     setLoading(false)
            //     window.location.href = response.data.data[0].url
            // } else {
            //     setLoading(false)
            //     setMessage('Hmmm... Your SmURL was not found.')
            // }
            let cancel 
            try {
                const response = await axios({
                    method: 'GET',
                    url: `${process.env.REACT_APP_SERVER_URL}/${smurl.id}`,
                    cancelToken: new axios.CancelToken(c => (cancel = c))
                })
                setMessage('This might take a while. Loading....')
                setLoading(false)
                window.location.href = response.data.data[0].url
            } catch (error) {
                if(axios.isCancel(error)) {
                    setLoading(false)
                }
                setMessage('Hmmm... Your SmURL was not found.')
            }
            return () => cancel()
        })()
    },[smurl.id])
  return (
    <>
    <div className='container'>
        <h1>{message}</h1>
    </div>
    </>
    
  )
}
