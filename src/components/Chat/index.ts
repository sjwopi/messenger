import Block from '../../utils/Block';
import MessCount from '../MessCount';
interface ChatProps {
  text: string;
  name: string;
  avatar: string;
  messageCount: string;
  messageTime: string;
}

export default class Chat extends Block {
  constructor(props: ChatProps) {
    super(props);
  }
  init() {
      (this.children.messageCount = new MessCount({text: this.props.messageCount}))
    
  }
  render() {
    // language=hbs
    return ( `
      <li class='chat'>

        <div class='chat__container'>
          <img src={{avatar}} alt='аватар {{name}}' class='chat__avatar' />

          <div class='chat__text'>
            <h3 class='chat__name'>{{name}}</h3>
            <p class='chat__mess'>{{text}}</p>
          </div>

          {{{messageCount}}}

        </div>

        <span class='chat__time'>{{messageTime}}</span>
      </li>
    ` );
  }
}

//<p class='chat__count'>{{messageCount}}</p>
