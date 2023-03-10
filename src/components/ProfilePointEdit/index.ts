import Block from '../../utils/Block';

interface ProfilePointEditProps {
  key: string;
  value: string;
  name: string;
  type: string;
  className?: string;
}

export default class ProfilePointEdit extends Block {
  constructor(props: ProfilePointEditProps) {
    super(props);
  }
  render() {
    // language=hbs
    return `
      <div class='profile__point'>
        <h2 class='profile__key {{className}}'>{{key}}</h2>
        <input name={{name}} class='profile__input input-validation {{className}}' placeholder={{value}} type={{type}} />
        <span class="span-error profile__edit-error {{name}}-error"></span>
      </div>`;
  }
}
