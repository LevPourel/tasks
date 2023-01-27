
const menu = document.querySelectorAll('input')
const currency = {}
function getUSD(currency) {
}
     async function getCourse() {
        const myFetch = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
            .then(function (response) {
                response.json().then(function (data) {
                    console.log(data)
                })
            })
         return myFetch
}
getUSD(getCourse())