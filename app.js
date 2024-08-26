//? This will grab the entire element by the ID name
//* ex. <h3 id="serviceAmazing">AMAZING</h3>
let serviceHeading = document.getElementById("serviceAmazing");

console.log(serviceHeading);

//? Grabbing the id by multiple elements by className
//* Makes an array with all the elements with the specfied classname
let serviceElements = document.getElementsByClassName("serviceIcons");

console.log(serviceElements);


//? Grabbing the element by css selection
let serviceSupport = document.querySelector(".amazingIcon h5")

console.log(serviceSupport);

//? Grabbing all the elements by css selection
//* Makes an array with all the elements with the specfied classname
let serviceColumns = document.querySelectorAll(".serviceIcons h6")

console.log(serviceColumns);


//? Modify Elements section

//* if we want to add text use .innerHTML
serviceHeading.innerHTML = "AMAZING"

//? changing the text for a specfic index in a NODECollection 
serviceColumns[2].innerHTML = "Design"


// function styleCenter() {
//     for (let i = 0; i < serviceColumns.length; i++) {
//         const element = serviceColumns[i];
        
//         serviceColumns[i].style.textAlign = "center";
//     }

// }


//? Styling Elements
//* https://www.w3schools.com/jsref/dom_obj_style.asp
//* If you look up styling property it should give you the Javascript syntax
// serviceSupport.style.color = "green"
// serviceSupport.style.fontSize = "60px"

//? Event Listeners

let serviceImageOne = document.querySelector(".amazingIcon img")

console.log(serviceImageOne)

// serviceImageOne.addEventListener("mouseover", onImagePress)

function onImagePress() {
    console.log("hey ya pressed me!")
}

let logosTextHeaders = document.querySelectorAll(".logosection-container h5")

console.log(logosTextHeaders)

function stylingText() {
    for (let i = 0; i < logosTextHeaders.length; i++) {
        const element = logosTextHeaders[i];

        logosTextHeaders[i].style.color = "green"
        logosTextHeaders[i].style.fontSize = "20px"
    }
}

serviceImageOne.addEventListener("click", stylingText);


//* Navbar
let serviceImageTwo = document.querySelector(".mobile-icon img")

let navbarLinks = document.querySelectorAll(".navbar a")

function changeNavTextColor() {
    for (let i = 0; i < navbarLinks.length; i++) {
        const element = navbarLinks[i];
        navbarLinks[i].style.color = "blue"
    }
    
}

console.log(navbarLinks)

serviceImageTwo.addEventListener("click", changeNavTextColor);



let portfolioHeaderWord = document.querySelector(".portfolio-header-text span")

function displayWords() {
    console.log("I'ma Mr. Portfolio")
}

portfolioHeaderWord.addEventListener("mouseover", displayWords);

let porfolioButtons = document.getElementById("buttons")

let portfolioBackgrounds = document.getElementsByClassName("backgroundSelector")

function changePortfolioBackgrounds() {
    for (let i = 0; i < portfolioBackgrounds.length; i++) {
        const element = portfolioBackgrounds[i];
        portfolioBackgrounds[i].style.background = "purple"
    };
}

console.log(portfolioBackgrounds)

porfolioButtons.addEventListener("click", changePortfolioBackgrounds);

let portfolioSubheadings = document.getElementsByClassName("portfolioheader")

let minicardImg = document.querySelector(".moo-minicards img")

function changeMinicardsFont() {
    for (let i = 0; i < portfolioSubheadings.length; i++) {
        const elemenet = portfolioSubheadings[i];
        portfolioSubheadings[i].style.fontSize = "60px"
    }
    }

console.log(minicardImg)

minicardImg.addEventListener("click", changeMinicardsFont)
//**********************************************************/

//? Input Boxes
//? Grabbing Values from html divs (ex: id: "name" in first form group)
//* This code affects the name textbox on the website.
let inputName = document.getElementById("name")
//* Created these variables to save input values from form box textbox.
let savedInfo = ""

console.log(inputName)

//* The anonymous function (() => {}) allows you to use a function as a parameter (function greeting(hello, () => {})) 
inputName.addEventListener("input", () => {


    savedInfo = inputName.value;
    console.log(savedInfo)
})

//* 2nd option on saving information from an input textbox

//* This variable is being used to grab the input value from the email form in html with the id "email".
let inputEmail = document.querySelector("#email")
//* This variable is being set to the button in html, and will be used later to add event listeners to.
let subscriberButton = document.querySelector(".subscribe button")
let savedEmailInfo = "";
//* created an anonymous function as the parameter to save the users input to a variable, reset the value, and then console the input.
subscriberButton.addEventListener("click", () => {
    savedEmailInfo = inputEmail.value;
    //* Clearing the textbox value
    inputEmail.value = ""
    console.log(savedEmailInfo)
})

//? Saving a list of personal information
//* creating and empty array to store user information
let subscribeList = [];
//* creating an object with subscriber properties to push into the array
let personInfo = {
    name: "",
    email: "" 
};


//* created a button variable set to the button in html with the class name "subscribe". We will add event listeners to this variable
let subscribeButton = document.querySelector(".subscribe button");
console.log(subscribeButton);

// function grabNewsLetterInfo() {
       //* These variables are being set to each html textbox
//     let inputName = document.querySelector("#name");
//     let inputEmail = document.querySelector("#email");

       //* Setting the object's values to the user's input
//     personInfo.name = inputName.value;
//     personInfo.email = inputEmail.value;
//     console.log(personInfo)

       //* pushing the new object with updated data into the array.
//     subscribeList.push(personInfo)
//     console.log(subscribeList)

//     //? Clearing out the input boxes
//     inputName = "";
//     inputEmail = "";
// }

//* updated subscribe button with new functionality
// subscribeButton.addEventListener("click", grabNewsLetterInfo)

