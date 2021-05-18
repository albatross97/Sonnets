var typeText = document.querySelector(".typeText")
var textToBeTyped = "Together, we can save the world."
var index = 0

function playAnim() {
  setTimeout(function () {
    // set the text of typeText to a substring of the text to be typed using index.
    typeText.innerText = textToBeTyped.slice(0, index)
      // adding text
      if (index > textToBeTyped.length) {
        //break: wait 2s before playing again
        setTimeout(function () {
          playAnim()
        }, 2000)
        return
      } else {
        // increment index by 1
        index++
      }
    // call itself
    playAnim()
  }, 120)
}
playAnim()