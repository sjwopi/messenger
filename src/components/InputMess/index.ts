import Block from '../../utils/Block';

interface InputMessProps {
  placeholder: string;
  name: string;
  type: string;
  className?: string; 
}

export default class InputMess extends Block {
  constructor(props: InputMessProps) {
    super(props);
  }
  get value() {
    return (this.element as HTMLInputElement).value;
  }
  render() {
    // language=hbs
    return `
        <input
          type={{type}}
          name={{name}}
          class='input-validation {{className}} {{name}}-error'
          placeholder='{{placeholder}}'
          id={{name}}
          required
        />
    `;
  }
}
