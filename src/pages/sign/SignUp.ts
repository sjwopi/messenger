import Block from '../../utils/Block';
import renderDOM from '../../utils/renderDOM';

import Button from '../../components/Button';
import ButtonBack from '../../components/ButtonBack';
import Input from '../../components/Input';

export default class SignUpPage extends Block {
  constructor(props: any) {
    super(props);
  }
  init() {
    (this.children.buttonBack = new ButtonBack()),

      (this.children.inputFirstName = new Input({
        name: 'first_name',
        type: 'text',
        placeholder: 'Имя',
      })),
      (this.children.inputSecondName = new Input({
        name: 'second_name',
        type: 'text',
        placeholder: 'Фамилия',
      })),
      (this.children.inputLogin = new Input({
        name: 'login',
        type: 'text',
        placeholder: 'Логин',
      })),
      (this.children.inputEmail = new Input({
        name: 'email',
        type: 'text',
        placeholder: 'Почта',
      })),
      (this.children.inputPassword = new Input({
        name: 'password',
        type: 'password',
        placeholder: 'Пароль',
      })),
      (this.children.inputPhone = new Input({
        name: 'phone',
        type: 'text',
        placeholder: 'Телефон',
      })),

      (this.children.btnSubmit = new Button({
        text: 'Зарегистрироваться',
        events: {
          click: () => {
            renderDOM('profile');
          },
        },
        className: 'form__submit',
      })),
      (this.children.btnRedirect = new Button({
        text: 'Войти',
        events: {
          click: () => {
            renderDOM('signIn');
          },
        },
        className: 'form__redirect',
      }))
  }
  render() {
    return (
      // language=hbs
      `<div>
        {{{buttonBack}}}
        <form class="form">
          <h1 class="form__title">Авторизация</h1>
          {{{inputFirstName}}}
          {{{inputSecondName}}}
          {{{inputLogin}}}
          {{{inputEmail}}}
          {{{inputPassword}}}
          {{{inputPhone}}}
          {{{btnSubmit}}}
          {{{btnRedirect}}}
        </form>
      </div>`
    );
  }
}
