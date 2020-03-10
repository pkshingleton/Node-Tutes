
//_______________________________________________________| BASIC WEB SCRAPER |____/


//-- Import AXIOS + CHEERIO 
//--------------------------
//  Axios is like super-fetch. Use it for getting and calling web apis 
//  Cheerio is for parsing or reading fetched documents. Use it to store or convert fetched data. 
//  Basically this is peanut-butter + jelly for web bots

const axios = require('axios')
const cheerio = require('cheerio')


//-- Set URL. Can use template literals to concactenate queries or attach other URL properties
const url = 'https://www.premierleague.com/stats/top/players/goals?se=-1&cl=-1&iso=-1&po=-1?se=-1';


/*
    //-- If you need to include credentials, you can do it like this:
    const auth = {
        username: 'myUserName',
        password: 'pass1234'
    }
*/


//-- AXIOS instance
//--------------------------
//  Inititates a request and does something with it. Works kinda like 'fetch()' but with extra goodies.
//  Here, Cheerio is used to select parts of the retrieved document, like how jQuery selects DOM elements.

axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html)
        const statsTable = $('.statsTableContainer > tr') 
        const topPremierLeagueScorers = []
0
        statsTable.each(function() {
            const rank = $(this).find('.rank > strong').text()
            const playerName = $(this).find('.playerName > strong').text()
            const nationality = $(this).find('.playerCountry').text()
            const goals = $(this).find('.mainStat').text()

            topPremierLeagueScorers.push({
                rank,
                name: playerName,
                nationality,
                goals,
            })
        })

        console.log(topPremierLeagueScorers);
        
    })
    .catch(console.error);
    
  
