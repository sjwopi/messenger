import Block from '../../utils/Block';
import renderDOM from '../../utils/renderDOM';
import Validate from '../../utils/Validate';

import Button from '../../components/Button';
import ButtonBack from '../../components/ButtonBack';
import Input from '../../components/Input';
import ButtonSubmit from '../../components/ButtonSubmit';

export default class SignUpPage extends Block {
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
        type: 'tel',
        placeholder: 'Телефон',
      })),
      (this.children.btnSubmit = new ButtonSubmit({
        text: 'Зарегистрироваться',
        type: 'submit',
        events: {
          click: (e) => {
            e.preventDefault();
            if ((this.children.btnSubmit as ButtonSubmit).valid) {
              const value = {
                login: (this.children.inputLogin as Input).value,
                firstName: (this.children.inputFirstName as Input).value,
                secondName: (this.children.inputSecondName as Input).value,
                email: (this.children.inputEmail as Input).value,
                password: (this.children.inputPassword as Input).value,
                phone: (this.children.inputPhone as Input).value,
              };
              console.log(value);
              renderDOM('profile');
            }
          },
        },
        className: 'form__submit',
      })),
      (this.children.btnRedirect = new Button({
        text: 'Войти',
        events: {
          click: () => {
            renderDOM('signIn');
            const Validator = new Validate('.form_sign-in');
            Validator.enableValidation();
          },
        },
        className: 'form__redirect',
      }));
  }
  render() {
    return (
      // language=hbs
      `<div>
        {{{buttonBack}}}
        <form class="form form_sign-up">
          <h1 class="form__title">Регистрация</h1>
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
