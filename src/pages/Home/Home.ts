import Block from '../../utils/Block';
import renderDOM from '../../utils/renderDOM';

import Button from '../../components/Button';

export default class HomePage extends Block {
  constructor(props: any) {
    super(props);
  }
  init() {
    (this.children.navButton1 = new Button({
      text: 'Profile',
      events: { click: () => {renderDOM('profile')} },
      className: 'nav__item',
    })),
      (this.children.navButton2 = new Button({
        text: 'Edit-profile',
        events: { click: () => {renderDOM('editProfile')} },
        className: 'nav__item',
      })),
      (this.children.navButton3 = new Button({
        text: 'Edit-password',
        events: { click: () => {renderDOM('editPassword')} },
        className: 'nav__item',
      })),
      (this.children.navButton4 = new Button({
        text: 'Messenger',
        events: { click: () => {renderDOM('messenger')} },
        className: 'nav__item',
      })),
      (this.children.navButton5 = new Button({
        text: 'MessengerActive',
        events: { click: () => {renderDOM('messengerActive')} },
        className: 'nav__item',
      })),
      (this.children.navButton6 = new Button({
        text: 'Sign-In',
        events: { click: () => {renderDOM('signIn')} },
        className: 'nav__item',
      })),
      (this.children.navButton7 = new Button({
        text: 'Sign-Up',
        events: { click: () => {renderDOM('signUp')} },
        className: 'nav__item',
      })),
      (this.children.navButton8 = new Button({
        text: 'err500',
        events: { click: () => {renderDOM('err500')} },
        className: 'nav__item',
      })),
      (this.children.navButton9 = new Button({
        text: 'err404',
        events: { click: () => {renderDOM('err404')} },
        className: 'nav__item',
      }));
  }
  render() {
    return (
      // language=hbs
      `<nav class='nav'>
        {{{navButton1}}}
        {{{navButton2}}}
        {{{navButton3}}}
        {{{navButton4}}}
        {{{navButton5}}}
        {{{navButton6}}}
        {{{navButton7}}}
        {{{navButton8}}}
        {{{navButton9}}}
      </nav>`
    );
  }
}
