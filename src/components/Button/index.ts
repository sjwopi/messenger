import Block from '../../utils/Block';

interface ButtonProps {
  text: string;
  events?: {
    click?: () => void; 
  };
  className?: string;
}

export default class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);
  }
  render() {
    // language=hbs
    return ( `<button class='button {{className}}'>{{text}}</button>` );
  }
}

