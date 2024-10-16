class Chatbox {
    constructor() {
        this.args = {
            OpenButton: document.querySelector('.chatbox__buton'),
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button')
        }
        this.state = false;
        this.message = [];
    }
    display(){
        const {OpenButton, chatBox, sendButton} = this.args;

        OpenButton.addEventListener('click', () => this.toggleState(chatBox));
        sendButton.addEventListener('click', () => this.onSendButton(chatBox));

        const node = chatBox.querySelector('input');
        node.addEventListener('keyup', ({key }) =>{
            if(key === 'Enter') {this.onSendButton(chatBox)};
        })
}
    toggleState(chatbox){
        this.state = !this.state;
        if (this.state){
            chatbox.classlist.add('chatbox--active')
        }
        else{
            chatbox.classlist.remove('chatbox--active')
        }
    }
}