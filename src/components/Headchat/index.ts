import Block from '../../utils/Block';

interface HeadChatProps {
  online: string;
  name: string;
  avatar: string;
  className: string;
}

export default class HeadChat extends Block {
  constructor(props: HeadChatProps) {
    super(props);
  }
  render() {
    return (`
    <div class='dialog__header headchat'>

      <img src={{avatar}} alt={{name}} class='headchat__avatar headchat__avatar{{className}}' />
      <div class='headchat__container'>
        <h2 class='headchat__name'>{{name}}</h2>
        <span class='headchat__status{{className}}'>{{online}}</span>
      </div>
  
    <button class='headchat__btn changetheme'></button>
  </div>
  
    `);
  }
}

