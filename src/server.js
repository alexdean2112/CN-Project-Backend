require("./db/connection");
const express = require("express");
const userRouter = require("./user/userRouters");
const cors = require("cors");
const orderRouter = require("./orders/orderRouters");
const axios = require("axios")

const app = express();

const port = process.env.PORT || 5001;

app.use(express.json());

app.use(cors())

app.use(userRouter, orderRouter);

app.listen(port, () => {
    console.log(`Listening to Port ${port}`);
})

app.post('/getGames', (req, res) => {
    axios({
        url: "https://api.igdb.com/v4/games",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': '1cncw8f6iwzanjuvsr622au2lm0o17',
            "Authorization": "Bearer jy28ba3opmq24gwnuza3fd89fz9pjd"
        },
        data: "fields name, summary;"
    })
        .then(response => {
            res.json(response.data)
        })
        .catch(err => {
            res.send(err)
        });
    })

app.post('/getPlatform', (req, res) => {
    axios({
        url: "https://api.igdb.com/v4/platforms",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': '1cncw8f6iwzanjuvsr622au2lm0o17',
            "Authorization": "Bearer jy28ba3opmq24gwnuza3fd89fz9pjd"
        },
        data: "fields name;"
        })
        .then(response => {
        res.json(response.data)
        })
        .catch(err => {
        res.send(err)
        });
    })


app.post('/getTopRated', (req, res) => {
    axios({
        url: "https://api.igdb.com/v4/games",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': '1cncw8f6iwzanjuvsr622au2lm0o17',
            "Authorization": "Bearer jy28ba3opmq24gwnuza3fd89fz9pjd"
        },
        data: "fields name, rating, summary; sort rating desc;"
      })
      .then(response => {
        res.json(response.data)
    })
    .catch(err => {
        res.send(err)
    });
})

app.post('/getLatest', (req, res) => {
    axios({
        url: "https://api.igdb.com/v4/games",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': '1cncw8f6iwzanjuvsr622au2lm0o17',
            "Authorization": "Bearer jy28ba3opmq24gwnuza3fd89fz9pjd"
        },
        data: "fields name, release_dates, summary; sort release_dates desc;"
      })
      .then(response => {
        res.json(response.data)
    })
    .catch(err => {
        res.send(err)
    });
})

    
    
