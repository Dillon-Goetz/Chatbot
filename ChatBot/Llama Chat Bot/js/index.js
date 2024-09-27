// //Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = 'https://api.adviceslip.com/advice'

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         console.log(data.slip.advice)
//         document.getElementById('advice').innerText = (data.slip.advice)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }
const chatInput = document.querySelector(".chat-input textarea")
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

let userMessage;

const createChatLi = (message, className) => {
    //create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === 'outgoing' ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}
const handleChat = () => {
    userMessage = chatInput.value.trim();
    if(!userMessage) return;
    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));

    setTimeout(() => {
        //Display thinking... message while waiting for the response
        chatbox.appendChild(createChatLi("Thinking...","incoming"));
    }, 600);
}

sendChatBtn.addEventListener('click', handleChat);
sendChatBtn.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleChat();
  }
});