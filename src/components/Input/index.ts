import Block from '../../utils/Block';

interface InputProps {
  placeholder: string;
  name: string;
  type: string;
}

export default class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }
  render() {
    // language=hbs
    return (`
      <div class='introd'>
        <label for={{name}} class='introd__placeholder'>{{placeholder}}</label>
        <input
          type={{type}}
          name={{name}}
          class='introd__input'
          id={{name}}
          required
        />
      </div>
    `);
  }
}

