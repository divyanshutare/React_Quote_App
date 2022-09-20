import { useHistory } from "react-router-dom"
import useHttp from '../hooks/use-http'
import QuoteForm from "../components/quotes/QuoteForm"
import { addQuote } from "../lib/api"
import { useEffect } from "react"

const NewQuote = () => 
{
    const {sendRequest, status} = useHttp(addQuote);
    const history = useHistory();

    useEffect(() => {
        if (status === 'completed') {
            history.push('/quotes')
        }
    }, [history, status])

    const addQuoteHandler = quoteData => {
        if (quoteData.author.length > 0 && quoteData.text.length > 0)
            sendRequest(quoteData);
    }
    return <QuoteForm isLoading={status} onAddQuote={addQuoteHandler}/>
    
}

export default NewQuote