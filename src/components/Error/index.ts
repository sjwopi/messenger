import Block from '../../utils/Block';
import renderDOM from '../../utils/renderDOM';
import Button from '../Button';

interface ErrorProps {
  type: string;
  text: string;
}

export default class Error extends Block {
  constructor(props: ErrorProps) {
    super(props);
  }
  init() {
    (this.children.btnRevert = new Button({
      text: 'Вернуться на главную',
      events: { click: () => {renderDOM('home')} },
      className: '',
    }))
  }
  render() {
    // language=hbs
    return ( `
      <div class="error">
        <h1 class="error__title">{{type}}</h1>
        <p class="error__text">{{text}}</p>
        {{{btnRevert}}}
      </div>
    `);
  }
}

