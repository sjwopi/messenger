import Block from '../../utils/Block';

interface ProfilePointProps {
  key: string;
  value: string;
}

export default class ProfilePoint extends Block {
  constructor(props: ProfilePointProps) {
    super(props);
  }
  render() {
    // language=hbs
    return (
    `<div class='profile__point'>
      <h2 class='profile__key'>{{key}}</h2>
      <p class='profile__value'>{{value}}</p>
    </div>
  `);
  }
}
