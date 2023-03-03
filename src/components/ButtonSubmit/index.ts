import Block from '../../utils/Block';

interface ButtonSubmitProps {
  text: string;
  type: string;
  events: {
    click: (e: any) => void; 
  };
  className?: string;
}

export default class ButtonSubmit extends Block {
  constructor(props: ButtonSubmitProps) {
    super(props);
  }
  get valid() {
    return !(this.element as HTMLInputElement).classList.contains('button_inactive');
  }
  render() {
    // language=hbs
    return ( `<input type={{type}} class='button button-submit {{className}}' value={{text}}>` );
  }
}
