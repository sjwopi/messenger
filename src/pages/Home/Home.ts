import Block from '../../utils/Block';
import renderDOM from '../../utils/renderDOM';
import Validate from '../../utils/Validate';

import Button from '../../components/Button';

export default class HomePage extends Block {
  init() {
    (this.children.navButton1 = new Button({
      text: 'Profile',
      events: {
        click: () => {
          renderDOM('profile');
        },
      },
      className: 'nav__item',
    })),
      (this.children.navButton2 = new Button({
        text: 'Edit-profile',
        events: {
          click: () => {
            renderDOM('editProfile');
            const Validator = new Validate('.form_edit-profile');
            Validator.enableValidation();
          },
        },
        className: 'nav__item',
      })),
      (this.children.navButton3 = new Button({
        text: 'Edit-password',
        events: {
          click: () => {
            renderDOM('editPassword');
            const Validator = new Validate('.form_edit-password');
            Validator.enableValidation();
          },
        },
        className: 'nav__item',
      })),
      (this.children.navButton4 = new Button({
        text: 'Messenger',
        events: {
          click: () => {
            renderDOM('messenger');
          },
        },
        className: 'nav__item',
      })),
      (this.children.navButton5 = new Button({
        text: 'MessengerActive',
        events: {
          click: () => {
            renderDOM('messengerActive');
            const Validator = new Validate('.form_messages');
            Validator.enableValidation();
          },
        },
        className: 'nav__item',
      })),
      (this.children.navButton6 = new Button({
        text: 'Sign-In',
        events: {
          click: () => {
            renderDOM('signIn');
            const Validator = new Validate('.form_sign-in');
            Validator.enableValidation();
          },
        },
        className: 'nav__item',
      })),
      (this.children.navButton7 = new Button({
        text: 'Sign-Up',
        events: {
          click: () => {
            renderDOM('signUp');
            const Validator = new Validate('.form_sign-up');
            Validator.enableValidation();
          },
        },
        className: 'nav__item',
      })),
      (this.children.navButton8 = new Button({
        text: 'err500',
        events: {
          click: () => {
            renderDOM('err500');
          },
        },
        className: 'nav__item',
      })),
      (this.children.navButton9 = new Button({
        text: 'err404',
        events: {
          click: () => {
            renderDOM('err404');
          },
        },
        className: 'nav__item',
      }));
  }
  render() {
    return (
      // language=hbs
      `<ul class='nav'>
        <li>{{{navButton1}}}</li>
        <li>{{{navButton2}}}</li>
        <li>{{{navButton3}}}</li>
        <li>{{{navButton4}}}</li>
        <li>{{{navButton5}}}</li>
        <li>{{{navButton6}}}</li>
        <li>{{{navButton7}}}</li>
        <li>{{{navButton8}}}</li>
        <li>{{{navButton9}}}</li
      </ul>`
    );
  }
}
