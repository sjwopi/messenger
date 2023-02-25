import Block from '../../utils/Block';
import renderDOM from '../../utils/renderDOM';

export default class ButtonBack extends Block {
  constructor() {
    super({events: { click: () => {renderDOM('home')} }});
  }
  render() {
    // language=hbs
    return ( `<button class='button-back changetheme'></button>` );
  }
}

