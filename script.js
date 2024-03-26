let timesClicked = 1
let currentCookies = 0
let cookiesPerClick = 1
let cookiesPerSecond = 0

// Prices for Upgrades

let workerCost = 50

function start()
{
    var upgradeButton = document.getElementsByClassName('UpgradeButton');
    for (var i = 0; i < upgradeButton.length; i ++) 
    {
        upgradeButton[i].style.display = 'none';
    }
}


function onCookieClicked()
{
    currentCookies = currentCookies + cookiesPerClick
    changeText()
    
    if(currentCookies > 50)
    {
        document.getElementById("UpgradeButtonWorker").style.display = 'block'
        document.getElementById("UpgradeButtonWorker").innerHTML = '<img src="./images/worker.png" alt="worker"></img>' + Math.round(workerCost) + " Cookies"
    }
}

function changeText()
{
    // Change times clicked
    document.getElementById("timesClickedText").innerHTML = timesClicked + " mal geklickt"
    timesClicked ++;

    // Change current cookies
    document.getElementById("currentCookiesText").innerHTML = "Cookies: " + Math.round(currentCookies)

    // Change current cookies per click
    document.getElementById("cookiesPerClickText").innerHTML = "Cookies pro Click: " + Math.round(cookiesPerClick)

    // Change current cookies per second
    document.getElementById("cookiesPerSecondText").innerHTML = "Cookies pro Sekunde: " + Math.round(cookiesPerSecond)

    // Update shops
    document.getElementById("UpgradeButtonWorker").innerHTML = '<img src="./images/worker.png" alt="worker"></img>' + Math.round(workerCost) + " Cookies"
}

function onUpgradeWorkerClicked()
{
    if(currentCookies >= workerCost)
    {
        currentCookies = currentCookies - workerCost
        cookiesPerClick = cookiesPerClick + 2
        workerCost = workerCost * 1.2
        changeText()
    }
}
    