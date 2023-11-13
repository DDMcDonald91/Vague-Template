import { Container, Card, CardBody, CardTitle } from 'reactstrap'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './index.css'

export default function Inspiration() {
    // Global state for the inspration component
    const [quote, setQuote] = useState()
    const [author, setAuthor] = useState()

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    // API
    const api = "https://type.fit/api/quotes"


    // Function to retrieve quote
    const getQuote = async () => {
        try {
            await axios.get(api).then((data) => {
                console.log(data.data)
                const randomQuote = data.data[Math.floor(Math.random() * data.data.length)];
                setQuote(randomQuote.text)
                setAuthor(randomQuote.author)
            })
        } catch (error) {
            console.log(error)
            setError(true)
        }
    }

    useEffect(() => {
        setLoading(true)

        getQuote()

        setLoading(false)
    }, [])

    const Fallback = () => {
        return(
            <Card className="bg-dark text-white w-100 p-3 card-opacity">
                <CardBody>
                    <h3>Errors are a part of the process. The worst error of all is giving up.</h3>
                </CardBody>
            <CardTitle>D. McDonald</CardTitle>
            </Card>  
        )
    }

    if(loading) {
        return(
            <p>Loading...</p>
        )
    }

  return (
    <Container fluid align='center' className='p-0 mt-1 mb-5'>
        {error ? 
        <>
            <Fallback />
        </>
        :
        <>
        <Card className="text-black w-100 p-1 card-opacity" style={{backgroundColor: 'pink', border: 'black solid 1.5px'}}>
            <CardBody>
                <h4>{quote}</h4>
            </CardBody>
            <CardTitle>{author && author.replace(", type.fit", "")}</CardTitle>
        </Card>
        </>
        }
    </Container>
  )
}
