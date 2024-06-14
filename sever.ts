import express , {Request, Response, NextFunction} from 'express'
import yahooFinance from 'yahoo-finance2'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

const port = 8000

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

interface QuoteRequest {
    ticker: string;
}

/*app.get("/",async(req,res)=>{
    const quote = await yahooFinance.quote('AAPL');
    res.json(quote)
})*/

app.post("/stock", async (req: Request<{}, {}, QuoteRequest>, res: Response) => {
    const { ticker } = req.body;

    if (!ticker) {
        return res.status(400).json({ error: 'Ticker symbol is required' });
    }

    try {
        const quote = await yahooFinance.quote(ticker);
        res.json(quote);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching stock data' });
    }
});


app.listen(port,()=>{console.log(`sever is running on port ${port}`)})