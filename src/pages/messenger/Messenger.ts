import Block from '../../utils/Block';

import ButtonBack from '../../components/ButtonBack';
import Chat from '../../components/Chat';

import defaultAvatar from '../../../static/avatar.jpg';

export default class MessengerPage extends Block {
  constructor(props: any) {
    super(props);
  }
  init() {
    (this.children.buttonBack = new ButtonBack()),
      (this.children.chat1 = new Chat({
        name: 'Вася',
        text: 'ыфавфыа  ыв ыфва  ывафыв ы',
        avatar: defaultAvatar,
        messageCount: '2',
        messageTime: '12.12'
      })),
      (this.children.chat2 = new Chat({
        name: 'Вася',
        text: 'ыфавфыа  ыв ыфва  ывафыв ы',
        avatar: defaultAvatar,
        messageCount: '2',
        messageTime: '12.12'
      })),
      (this.children.chat3 = new Chat({
        name: 'Вася',
        text: 'ыфавфыа  ыв ыфва  ывафыв ы',
        avatar: defaultAvatar,
        messageCount: '0',
        messageTime: '12.12'
      })),
      (this.children.chat4 = new Chat({
        name: 'Вася Пупкин',
        text: 'ыфавфыа  ыв ыфва  ывафыв ы',
        avatar: defaultAvatar,
        messageCount: '0',
        messageTime: '12.12'
      })),
      (this.children.chat5 = new Chat({
        name: 'Вася Вася Вася Вася',
        text: 'ыфавфыа  ыв ыфва  ывафыв ы',
        avatar: defaultAvatar,
        messageCount: '1',
        messageTime: '12.12'
      })),
      (this.children.chat6 = new Chat({
        name: 'Вася',
        text: 'ыфавфыа  ыв ыфва  ывафыв ы',
        avatar: defaultAvatar,
        messageCount: '0',
        messageTime: '12.12'
      }))
  }
  render() {
    return (
      // language=hbs
      `<div>
        {{{buttonBack}}}

        <main class="content">
          <div class="chats">
            <a href="../profile/profile.hbs" class="chats__to-profile changetheme">Профиль</a>
            <input class="search chats__search" placeholder="Найти диалог">

            <ul class="chats__list">
              {{{chat1}}}
              {{{chat2}}}
              {{{chat3}}}
              {{{chat4}}}
              {{{chat5}}}
              {{{chat6}}}
            </ul>

          </div>
          <div class="dialog">
            <h1 class="dialog__helper">Выберите диалог</h1>
          </div>
          
        </main>
      </div>`
    );
  }
}
