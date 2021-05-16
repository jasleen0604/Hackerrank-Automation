//npm install puppeteer

let puppeteer =require('puppeteer');

//browser launch

let browserWillBeLaunchedPromise = puppeteer.launch({    // promise to launch a browser
    headless: false // by default,  the browser is invisible, it happens in the background, so we made it visible.
})

browserWillBeLaunchedPromise     
.then(function (browserInstance){
    //new tab
    let newPagePromise = browserInstance.newPage();  //promise to open a new tab
    newPagePromise
    .then(function(newPage){          // then will execute after a new tab is opened
        console.log("new tab opened");

        //go to google
        let pageWillBeOpenedPromise = newPage.goto("https://www.google.com"); //promise to goto google.com
        pageWillBeOpenedPromise
        .then(function(){         // will execute after google.com is opened
            console.log("page is opened");
        })
    })
})
