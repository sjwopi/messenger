import Block from '../../utils/Block';
import renderDOM from '../../utils/renderDOM';

import Button from '../../components/Button';
import ButtonBack from '../../components/ButtonBack';
import ProfilePointEdit from '../../components/ProfilePointEdit';

import defaultAvatar from '../../../static/avatar.jpg';

export default class ProfileEditDataPage extends Block {
  constructor(props: any) {
    super(props);
  }
  init() {
    (this.children.buttonBack = new ButtonBack()),
      (this.children.pointEmail = new ProfilePointEdit({
        key: 'Почта',
        value: 'iteterk@gmail.com',
        name: 'email',
        type: 'email'
      })),
      (this.children.pointLogin = new ProfilePointEdit({
        key: 'Логин',
        value: 'sjwopi',
        name: 'login',
        type: 'text'
      })),
      (this.children.pointName = new ProfilePointEdit({
        key: 'Имя',
        value: 'Иван',
        name: 'first_name',
        type: 'text'
      })),
      (this.children.pointSurname = new ProfilePointEdit({
        key: 'Фамилия',
        value: 'Тетерук',
        name: 'second_name',
        type: 'text'
      })),
      (this.children.pointNickname = new ProfilePointEdit({
        key: 'Имя в чате',
        value: 'sjwopi',
        name: 'display_name',
        type: 'text'
      })),
      (this.children.pointPhone = new ProfilePointEdit({
        key: 'Телефон',
        value: '89876543210',
        name: 'phone',
        type: 'text'
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
            <div class="profile__avatar-btn">
              <input name='avatar' class="profile__avatar-input" type="file" value="">
              <img src=${defaultAvatar} alt="аватарка" class="profile__avatar">
            </div>
            <h1 class='profile__name'>&ensp;</h1>
          </div>
          <div class="profile__info">
            {{{pointEmail}}}
            {{{pointLogin}}}
            {{{pointName}}}
            {{{pointSurname}}}
            {{{pointNickname}}}
            {{{pointPhone}}}
          </div>
          <div class="profile__buttons">
            {{{btnEditSave}}}
            {{{btnOut}}}
          </div></main>
      </div>`
    );
  }
}
