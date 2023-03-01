import Block from '../../utils/Block';

interface MessageProps {
  sender: string;
  time: string;
  isActive: string;
}

export default class Message extends Block {
  constructor(props: MessageProps) {
    super(props);
  }
  render() {
    if (this.props.sender) {
      return `
      <div>
        <li class='message message_not-own'>
          <p class='message__text'>Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.</p>
          <div class='message__info'>
            <p class='message__sender'>{{sender}}</p>
            <span class='message__time'>{{time}}</span>
          </div>
        </li>
        <li></li>
      </div>
      `
    } 
    return (`
      <div>
        <li></li>
        <li class='message message_own'>
          <p class='message__text'>Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.</p>
          <div class='message__info message__info_own'>
            <span class='message__time'>{{time}}</span>
            <div
              class='message__looked message__looked{{isActive}} changetheme'
            ></div>
          </div>
        </li>
      </div>
    `);
  }
}

