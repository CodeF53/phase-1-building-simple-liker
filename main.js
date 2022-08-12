// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Error Management
function resetErrorModal() {
  document.querySelector("#modal").classList.add("hidden")
  document.querySelector("#modal-message").textContent = ""
}
function displayError(error) {
  document.querySelector("#modal").classList.remove("hidden")
  document.querySelector("#modal-message").textContent = error;
}
// hide our error modal by default.
resetErrorModal()


// Like Mangement
document.body.addEventListener("mouseup", (event) => {
  let heart_node = event.target
  switch (heart_node.textContent){
    case EMPTY_HEART:
      mimicServerCall(url="http://mimicServer.example.com").then(()=>{
        heart_node.textContent = FULL_HEART;
        heart_node.classList.add("activated-heart")
      }).catch((error)=>{
        displayError(error)
      })
      break;
    case FULL_HEART:
      // kinda odd that we dont make a server request to unlike
      heart_node.textContent = EMPTY_HEART;
      heart_node.classList.remove("activated-heart")
      break;
  }
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
