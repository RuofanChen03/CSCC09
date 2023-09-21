if (!localStorage.getItem("microblog")) {
    localStorage.setItem("microblog", JSON.stringify({ next: 0, messages: [] }));
}
  
/*  ******* Data types *******
    message objects must have at least the following attributes:
        - (String) messageId
        - (String) author
        - (String) content
        - (Int) upvote
        - (Int) downvote
****************************** */
  
// retrieve all messages
export function getMessages(){
    const microblog = JSON.parse(localStorage.getItem("microblog"));
    return microblog.messages;
}
  
// add a message
export function addMessage(author, content){
    const microblog = JSON.parse(localStorage.getItem("microblog"));
    const message = { id: microblog.next++, author: author, content: content , upvote: 0, downvote: 0 };
    microblog.messages.push(message);
    localStorage.setItem("microblog", JSON.stringify(microblog));
}

// delete a message given its messageId
export function deleteMessage(messageId){
    const microblog = JSON.parse(localStorage.getItem("microblog"));
    const index = microblog.messages.findIndex(function (message) {
      return message.id == messageId;
    });
    if (index == -1) return null;
    const message = microblog.messages[index];
    microblog.messages.splice(index, 1);
    localStorage.setItem("microblog", JSON.stringify(microblog));
}

// upvote a message given its messageId
export function upvoteMessage(messageId){
    const microblog = JSON.parse(localStorage.getItem("microblog"));
    const index = microblog.messages.findIndex(function (message) {
      return message.id == messageId;
    });
    if (index == -1) return null;
    const message = microblog.messages[index];
    message.upvote = (message.upvote + 1);
    localStorage.setItem("microblog", JSON.stringify(microblog));
}

// downvote a message given its messageId
export function downvoteMessage(messageId){
    const microblog = JSON.parse(localStorage.getItem("microblog"));
    const index = microblog.messages.findIndex(function (message) {
      return message.id == messageId;
    });
    if (index == -1) return null;
    const message = microblog.messages[index];
    message.downvote = (message.downvote + 1);
    localStorage.setItem("microblog", JSON.stringify(microblog));
}