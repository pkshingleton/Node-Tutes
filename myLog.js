module.exports = {

    srvLog: function(address, port) {
    //-- Returns a message in console that server is running + location
        const serverMsg = " SERVER RUNNING"
        const bar = "\n----------------\n"
        console.log(`\n\n${bar.dim.gray}${serverMsg.bold.brightGreen}${bar.dim.gray} ${address.dim.white}:`+`${port}`.bold.brightCyan +`${bar.dim.gray}`);
    },
    
    reqLog: function(request) {
    //-- Takes request object and logs the origin
        console.log(`\n<-- `.brightCyan + `Request  ` +  `:: `.gray.dim + `${request.url.brightCyan}`.bold)
    },
    
    resLog: function(response) {
    //-- Takes response object and logs status
        let resText = `[Status]`
        let resCode = `${response.statusCode}`
        let responseText = `${resText.dim.gray} ${resCode.bold.green}`
        console.log(`--> `.brightGreen + `Response ` + `:: `.gray.dim + `${responseText}`)
    }
    
}
