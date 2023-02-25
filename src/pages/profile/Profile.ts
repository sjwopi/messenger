import Block from '../../utils/Block';
import renderDOM from '../../utils/renderDOM';

import Button from '../../components/Button';
import ButtonBack from '../../components/ButtonBack';
import ProfilePoint from '../../components/ProfilePoint';

import defaultAvatar from '../../../static/avatar.jpg';

export default class ProfilePage extends Block {
  constructor(props: any) {
    super(props);
  }
  init() {
    (this.children.buttonBack = new ButtonBack()),
      (this.children.pointEmail = new ProfilePoint({
        key: 'Почта',
        value: 'iteterk@gmail.com',
      })),
      (this.children.pointLogin = new ProfilePoint({
        key: 'Логин',
        value: 'sjwopi',
      })),
      (this.children.pointName = new ProfilePoint({
        key: 'Имя',
        value: 'Иван',
      })),
      (this.children.pointSurname = new ProfilePoint({
        key: 'Фамилия',
        value: 'Тетерук',
      })),
      (this.children.pointNickname = new ProfilePoint({
        key: 'Имя в чате',
        value: 'sjwopi',
      })),
      (this.children.pointPhone = new ProfilePoint({
        key: 'Телефон',
        value: '89876543210',
      })),
      (this.children.btnEditData = new Button({
        text: 'Изменить данные',
        events: { click: () => {renderDOM('editProfile')} },
        className: '',
      })),
      (this.children.btnEditPassword = new Button({
        text: 'Измменить пароль',
        events: { click: () => {renderDOM('editPassword')} },
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
            <h1 class='profile__name'>Name</h1>
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
            {{{btnEditData}}}
            {{{btnEditPassword}}}
            {{{btnOut}}}
          </div></main>
      </div>`
    );
  }
}
