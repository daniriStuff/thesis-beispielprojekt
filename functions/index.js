const functions = require('firebase-functions')
const cors = require('cors')({ origin: true })
/**
 * Dies stellt einen Endpoint bereit, welcher ueber das http-Protokoll angesprochen werden kann.
 * CRUD-Operationen werden unterstuetzt
 */
exports.exampleFunction = functions.https.onRequest((request, response) => {
    // Die Zahlenfolge vom request abfangen und zuweisen
    let zf = request.body.zahlenfolge
    console.log(request.body)
    // Neues temporaeres Array welches danach die Zahlen sortiert
    let zfA = []
    // Die Zahlenfolge als string zu einem Array
    for (var i = 0; i < zf.length; i++) {
        zfA.push(zf.charAt(i))
    }
    // Sortieren der Zahlen
    zfA.sort()

    // Wird fuer Access-Cross-Platform benoetigt
    cors(request, response, () => {
        // Response zurueck zum client mit einem sortiertem Array
        response.status(200).send(JSON.stringify(zfA))
    })
})
