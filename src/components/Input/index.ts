import Block from '../../utils/Block';

interface InputProps {
  placeholder: string;
  name: string;
  type: string;
  className?: string; 
}

export default class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }
  get value() {
    return (this.element.querySelector('.introd__input') as HTMLInputElement).value;
  }
  render() {
    // language=hbs
    return `
      <div class='introd'>
        <label for={{name}} class='introd__placeholder'>{{placeholder}}</label>
        <input
          type={{type}}
          name={{name}}
          class='introd__input input-validation {{className}}'
          id={{name}}
          required
        />
        <span class="span-error {{name}}-error"></span>
      </div>
    `;
  }
}
