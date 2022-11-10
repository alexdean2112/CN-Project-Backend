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
        data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_localizations,game_modes,genres,hypes,involved_companies,keywords,language_supports,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
    })
        .then(response => {
            res.json(response.data)
        })
        .catch(err => {
            res.send(err)
        });
    })
