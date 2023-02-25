import Block from '../../utils/Block';
import renderDOM from '../../utils/renderDOM';

import Button from '../../components/Button';
import ButtonBack from '../../components/ButtonBack';
import ProfilePointEdit from '../../components/ProfilePointEdit';

import defaultAvatar from '../../../static/avatar.jpg';

export default class ProfileEditPasswordPage extends Block {
  constructor(props: any) {
    super(props);
  }
  init() {
    (this.children.buttonBack = new ButtonBack()),
      (this.children.oldPassword = new ProfilePointEdit({
        key: 'Старый пароль',
        value: '-',
        name: 'oldPassword',
        type: 'password',
        className: 'password-key'
      })),
      (this.children.newPassword1 = new ProfilePointEdit({
        key: 'Новый пароль',
        value: '-',
        name: 'newPassword1',
        type: 'password',
        className: 'password-key'
      })),
      (this.children.newPassword2 = new ProfilePointEdit({
        key: 'Повторите пароль',
        value: '-',
        name: 'newPassword2',
        type: 'password',
        className: 'password-key'
      })),
      (this.children.btnEditSave = new Button({
        text: 'Сохранить',
        events: { click: () => {renderDOM('profile')} },
        className: '',
      })),
      (this.children.btnOut = new Button({
        text: 'Выйти',
        events: { click: () => {renderDOM('home')} },
        className: 'profile__out',
      }))
  }
  render() {
    return (
      // language=hbs
      `<div>
        {{{buttonBack}}}
        <main class='profile'>
          <div class='profile__header'>
            <img src=${defaultAvatar} alt="ваш аватар" class='profile__avatar'>
            <h1 class='profile__name'>&ensp;</h1>
          </div>
          <div class="profile__info">
            {{{oldPassword}}}
            {{{newPassword1}}}
            {{{newPassword2}}}
          </div>
          <div class="profile__buttons">
            {{{btnEditSave}}}
            {{{btnOut}}}
          </div></main>
      </div>`
    );
  }
}
