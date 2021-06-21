// ### Hide messages with delegation

// There’s a list of messages with removal buttons  `[x]`. Make the buttons work.

SOLUTION:

document.querySelectorAll('.pane').forEach(function(elem){
    elem.addEventListener("click", elem.remove)
       
        })
