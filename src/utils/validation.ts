const Messages: any = {
	'first_name':	'Имя введено некорректно',
	'second_name':	'Фамилия введена некорректно',
	'login':		'Логин введен некорректно',
	'email':		'Неправильный Email',
	'phone':		'Телефон введен некорректно',
	'password':		'Неверный пароль',
	'display_name':	'Никнэйм введен некорректно',
}
const validity: any = {
	'first_name':	(value:string)=> (value.match('^[A-ZА-ЯЁ][a-zA-Zа-яА-ЯёЁ]+$')),
	'second_name': (value:string)=>(value.match('^[A-ZА-ЯЁ][a-zA-Zа-яА-ЯёЁ]+$')),
	'login': (value:string)=>(value.match('^(?=.{3,20}$)([a-zA-Z0-9_-]*[a-zA-Z_-][a-zA-Z0-9_-]*)$')),
	'email': (value:string)=>(value.match('^[a-zA-Z0-9_-]+@[a-zA-Z]+.[a-zA-Z]+$')),
	'phone': (value:string)=>( value.match('^\\+?\\d{10,15}$')),
	'password': (value:string)=>(value.match('^(?=.*?[A-ZА-ЯЁ])(?=.*?[0-9]).{8,40}$')),
	'display_name':	(value:string)=>(value.match('^.*\\S{3,}.*$'))
}
export default class validate {
  private form: HTMLFormElement;
  private inputList: HTMLInputElement[];
  private buttonSubmit: HTMLInputElement;
  private errorElement: HTMLElement;

  constructor() {
    this.form = document.querySelector('.form')!;
    this.inputList = Array.from(this.form.querySelectorAll('.form-input'));
    this.buttonSubmit = this.form.querySelector('.button-submit')!;
    this.errorElement = document.createElement('span');
  }

  showInputError(inputElement: HTMLInputElement) {
    inputElement.classList.add('input_invalid')
    this.errorElement = this.form.querySelector(`.${inputElement.type}-error`)!;
    this.errorElement.textContent = Messages[inputElement.name];
  }
  hideInputError(inputElement: HTMLInputElement) {
    inputElement.classList.remove('input_invalid')
    this.errorElement = this.form.querySelector(`.${inputElement.type}-error`)!;
    this.errorElement.textContent = '';
  }

  toggleInputError(inputElement: HTMLInputElement) {
    if (!validity[inputElement.name](inputElement.value)) {
      this.showInputError(inputElement);
    } else {
      this.hideInputError(inputElement);
    }
  }
  toggleButtonState() {
    const isFormValid = this.inputList.some(item=>!validity[item.name](item.value))
    if (isFormValid) {
      this.buttonSubmit.classList.add('button_inactive');
      this.buttonSubmit.disabled = true;
    } else {
      this.buttonSubmit.classList.remove('button_inactive');
      this.buttonSubmit.disabled = false;
    }
  }
  setEventListeners() {
    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', (evt) => {
        evt.preventDefault();
        this.toggleInputError(inputElement);
        this.toggleButtonState();
      });
    });
  }
  enableValidation() {
    this.setEventListeners();
    this.toggleButtonState();
  }
}
