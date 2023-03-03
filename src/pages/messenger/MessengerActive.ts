import Block from '../../utils/Block';

import ButtonBack from '../../components/ButtonBack';
import Chat from '../../components/Chat';
import HeadChat from '../../components/Headchat';
import Message from '../../components/Message';
import Input from '../../components/Input';
import InputMess from '../../components/InputMess';
import ButtonSubmit from '../../components/ButtonSubmit';

import defaultAvatar from '../../../static/avatar.jpg';

export default class MessengeActivePage extends Block {
  init() {
    (this.children.buttonBack = new ButtonBack()),
      (this.children.chat1 = new Chat({
        name: 'Вася',
        text: 'ыфавфыа  ыв ыфва  ывафыв ы',
        avatar: defaultAvatar,
        messageCount: '2',
        messageTime: '12.12',
      })),
      (this.children.chat2 = new Chat({
        name: 'Вася',
        text: 'ыфавфыа  ыв ыфва  ывафыв ы',
        avatar: defaultAvatar,
        messageCount: '2',
        messageTime: '12.12',
      })),
      (this.children.chat3 = new Chat({
        name: 'Вася',
        text: 'ыфавфыа  ыв ыфва  ывафыв ы',
        avatar: defaultAvatar,
        messageCount: '0',
        messageTime: '12.12',
      })),
      (this.children.chat4 = new Chat({
        name: 'Вася Пупкин',
        text: 'ыфавфыа  ыв ыфва  ывафыв ы',
        avatar: defaultAvatar,
        messageCount: '0',
        messageTime: '12.12',
      })),
      (this.children.chat5 = new Chat({
        name: 'Вася Вася Вася Вася',
        text: 'ыфавфыа  ыв ыфва  ывафыв ы',
        avatar: defaultAvatar,
        messageCount: '1',
        messageTime: '12.12',
      })),
      (this.children.chat6 = new Chat({
        name: 'Вася',
        text: 'ыфавфыа  ыв ыфва  ывафыв ы',
        avatar: defaultAvatar,
        messageCount: '0',
        messageTime: '12.12',
      })),
      (this.children.headchat = new HeadChat({
        avatar: defaultAvatar,
        name: 'Вова',
        online: 'online',
        className: '_online'
        /* online: 'был в сети 12:12',
        className: '' */
      })),
      (this.children.message1 = new Message({
        sender: 'Вoва',
        time: '12:12',
        isActive: ''
      })),
      (this.children.message2 = new Message({
        sender: '',
        time: '12:12',
        isActive: '_active'
      })),
      (this.children.message3 = new Message({
        sender: '',
        time: '12:12',
        isActive: ''
      })),
      (this.children.inputMess = new InputMess({
        name: 'message',
        type: 'message',
        placeholder: 'Введите сообщение',
        className: 'dialog__input dialog__input_text'
      })),
      (this.children.btnSubmit = new ButtonSubmit({
        text: '',
        type: 'submit',
        events: {
          click: (e) => {
            e.preventDefault();

            if ((this.children.btnSubmit as ButtonSubmit).valid) {
              const value = {
                message: (this.children.inputMess as Input).value,
              };
              console.log(value);
            }
          },
        },
        className: 'form__submit dialog__input dialog__input_submit',
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
              {{{chat4}}}
              {{{chat5}}}
              {{{chat6}}}
            </ul>

          </div>
          <div class="dialog">
            {{{headchat}}}

            <ul class="dialog__messages">
              {{{message1}}}
              {{{message2}}}
              {{{message3}}}
            </ul>
            <div class="dialog__inputs form_messages">
              <input class="dialog__input dialog__input_smiley changetheme" type="button">
              <input class="dialog__input dialog__input_file" type="file">
              {{{inputMess}}}
              {{{btnSubmit}}}
           

            </div>
          </div>
        </main>
      </div>`
    );
  }
}
