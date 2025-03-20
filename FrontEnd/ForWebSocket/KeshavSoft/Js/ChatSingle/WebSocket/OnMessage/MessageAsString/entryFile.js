let StartFunc = ({ inMessageAsString }) => {
    const chatMessages = document.querySelector('.chat-messages');
    const message = inMessageAsString;

    chatMessages.innerHTML += `<div class="message mb-3 align-self-end">
<div class="bg-primary text-white rounded p-2">${message}</div>
<small class="text-muted">2 mins ago</small>
</div>`
};

export { StartFunc };