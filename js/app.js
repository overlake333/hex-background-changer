// Source: https://github.com/JS-Beginners/hex-color-background-changer
// .  .  .
// Learned the basics of Javascript and took a deep dive into DOM 
// by learning how to find HTML elements by tag name through calling
// .querySelector() on the DOM and the differences between Core DOM, 
// XML DOM, and HTML DOM. 
// .  .  .

(function() {
    // acceptable hex characters
    const hexVals = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    
    // variables from DOM 
    var btn = document.querySelector('#btn')
    var body = document.querySelector('body')
    var val = document.querySelector('#hex-value')
    
    // adding an event listener to the button
    btn.addEventListener('click', getNewHex)

    // function to change hex value of the website's background color
    function getNewHex(){
        // generating random Hex variable
        let hex = '#'
        for (let i = 0; i < 6; i++){
            var index = Math.floor(Math.random() * hexVals.length)
            hex += hexVals[index]
        }
        
        // set DOM variables to new hex code
        val.textContent = hex
        body.style.backgroundColor = hex
    }
} )()
