import Block from '../../utils/Block';

interface MessCountProps {
  text: string;
}

export default class MessCount extends Block {
  constructor(props: MessCountProps) {
    super(props);
  }
  render() {
    if (this.props.text!=='0') {
      return `<p class='chat__count'>{{text}}</p>`
    }
    return `<p></p>`;
  }
}
