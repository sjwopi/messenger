import Block from '../../utils/Block';
import renderDOM from '../../utils/renderDOM';

import Button from '../../components/Button';
import ButtonBack from '../../components/ButtonBack';
import Input from '../../components/Input';

export default class SignInPage extends Block {
  constructor(props: any) {
    super(props);
  }
  init() {
    (this.children.buttonBack = new ButtonBack()),

      (this.children.inputLogin = new Input({
        name: 'login',
        type: 'text',
        placeholder: 'Логин',
      })),
      (this.children.inputPassword = new Input({
        name: 'password',
        type: 'password',
        placeholder: 'Пароль',
      })),

      (this.children.btnSubmit = new Button({
        text: 'Войти',
        events: {
          click: () => {
            renderDOM('profile');
          },
        },
        className: 'form__submit',
      })),
      (this.children.btnRedirect = new Button({
        text: 'Регистрация',
        events: {
          click: () => {
            renderDOM('signUp');
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
          {{{inputLogin}}}
          {{{inputPassword}}}
          {{{btnSubmit}}}
          {{{btnRedirect}}}
        </form>
      </div>`
    );
  }
}
