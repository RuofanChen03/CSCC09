import { getMessages, addMessage, deleteMessage, upvoteMessage, downvoteMessage } from "./api.mjs";

function update(author, content) {
  const messages = getMessages();
  document.querySelector("#messages").innerHTML = "";
  messages.forEach(function (message) {
    const element = document.createElement("div");
    element.className = "message";
    element.innerHTML = `
      <div class="message_user">
        <img class="message_picture" src="media/user.png" alt="${message.author}">
        <div class="message_username">${message.author}</div>
      </div>
      <div class="message_content">${message.content}</div>
      <div class="upvote-icon icon">${message.upvote}</div>
      <div class="downvote-icon icon">${message.downvote}</div>
      <div class="delete-icon icon"></div>
    `;
    element
      .querySelector(".delete-icon")
      .addEventListener("click", function (e) {
        deleteMessage(message.id);
        update();
      });
    element
      .querySelector(".upvote-icon")
      .addEventListener("click", function (e) {
        upvoteMessage(message.id);
        update();
      });
    element
      .querySelector(".downvote-icon")
      .addEventListener("click", function (e) {
        downvoteMessage(message.id);
        update();
      });
    document.querySelector("#messages").prepend(element);
  });
}
  
document.querySelector("#create_message_form").addEventListener("submit", function (e) {
  e.preventDefault();
  const author = document.getElementById("post_name").value;
  const content = document.getElementById("post_content").value;
  document.querySelector("#create_message_form").reset();
  addMessage(author, content);
  update();
});

update();