import Block from '../../utils/Block';
import renderDOM from '../../utils/renderDOM';

import Button from '../../components/Button';
import ButtonBack from '../../components/ButtonBack';
import ProfilePointEdit from '../../components/ProfilePointEdit';
import ButtonSubmit from '../../components/ButtonSubmit';

import defaultAvatar from '../../../static/avatar.jpg';
import Input from '../../components/Input';

export default class ProfileEditPasswordPage extends Block {
  init() {
    (this.children.buttonBack = new ButtonBack()),
      (this.children.oldPassword = new ProfilePointEdit({
        key: 'Старый пароль',
        value: '-',
        name: 'password',
        type: 'password',
        className: 'password-key'
      })),
      (this.children.newPassword1 = new ProfilePointEdit({
        key: 'Новый пароль',
        value: '-',
        name: 'password1',
        type: 'password',
        className: 'password-key'
      })),
      (this.children.newPassword2 = new ProfilePointEdit({
        key: 'Повторите пароль',
        value: '-',
        name: 'password2',
        type: 'password',
        className: 'password-key'
      })),
      (this.children.btnEditSave = new ButtonSubmit({
        text: 'Сохранить',
        type: 'submit',
        events: { click: (e) => {
          e.preventDefault();

          if ((this.children.btnSubmit as ButtonSubmit).valid) {
            const value = {
              oldPassword: (this.children.oldPassword as Input).value,
              newPassword1: (this.children.newPassword1 as Input).value,
              newPassword2: (this.children.newPassword2 as Input).value,
            };
            console.log(value);
            renderDOM('profile');
          }
        },},
        className: ''
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
            <form class="form_edit-password">
                {{{oldPassword}}}
                {{{newPassword1}}}
                {{{newPassword2}}}
              <div class="profile__buttons">
                {{{btnEditSave}}}
                {{{btnOut}}}
              </div>
            </form>
          </div>
        </main>
      </div>`
    );
  }
}
