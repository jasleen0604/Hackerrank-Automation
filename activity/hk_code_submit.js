let cheerio = require("cheerio");
let puppeteer =require('puppeteer');
// let {password, email} = require("../../secret");
let gtab;
let wtab;

//browser launch
let browserPromise = puppeteer.launch({   
    headless: false,
    defaultViewport: null, 
    args: ["--start-maximized"]
})

browserPromise     
.then(function (browserInstance){
    //new tab
    let newtabPromise = browserInstance.newPage();  //promise to open a new tab
    return newtabPromise;
})
.then(function(newTab){          
    //go to login page
    let loginpageWillBeOpenedPromise = newTab.goto("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
    gtab=newTab;
    return loginpageWillBeOpenedPromise;
})
.then(function(){
    let emailWillBeTypedpromise = gtab.type("#input-1", "yagowod382@bombaya.com", {delay : 200});
    return emailWillBeTypedpromise;
})
.then(function(){
    let passwordWillBeTypedPromise = gtab.type("#input-2", "aliceyagowod", {delay : 200 });
    return passwordWillBeTypedPromise;
})
.then(function(){

    let loginPageWillBeClickedPromise = gtab.click("button[data-analytics='LoginPassword']");
    let waitForNavigationPromise = gtab.waitForNavigation({waitUntil: "networkidle0"});
    let IPWillBeOpenedPromise = gtab.waitForSelector(".card-content h3[title='Interview Preparation Kit']", {visible: true});
    let combinedPromise = Promise.all([loginPageWillBeClickedPromise, waitForNavigationPromise, IPWillBeOpenedPromise]);

    return combinedPromise;
})
.then(function(){
    console.log("Logged in!");
})
.then(function(){
    // go to interview prep
    let interviewPrepPageWillBeOpenedPromise = gtab.click(".card-content h3[title='Interview Preparation Kit']");
    let waitForNavigationPromise = gtab.waitForNavigation({waitUntil: "networkidle0"});
    let WCWillBeOpenedPromise = gtab.waitForSelector("a[data-attr1='warmup']", {visible: true});
    let combinedPromise = Promise.all([interviewPrepPageWillBeOpenedPromise, waitForNavigationPromise, WCWillBeOpenedPromise]);
    return combinedPromise;
})
.then(function(){
    //go to warm-up challenges
    let warmupChallenegesWillBeOpenedPromise = gtab.click("a[data-attr1='warmup']");
    let waitForNavigationPromise = gtab.waitForNavigation({waitUntil: "networkidle0"});
    //let questionWillBeClickedpromise = gtab.waitForSelector("", {visible: true});
    let combinedPromise = Promise.all([warmupChallenegesWillBeOpenedPromise, waitForNavigationPromise]);
    return combinedPromise;
})
// .then(function(){
//     //go to each question
//     let questionclickPromise = gtab.click("");
//     let waitForNavigationPromise = gtab.waitForNavigation({waitUntil: "networkidle0"});
//     let combinedPromise = Promise.all([questionclickPromise, waitForNavigationPromise]);
//     return combinedPromise;

// })
.catch(function(err){
    console.log("error found: ", err);
})