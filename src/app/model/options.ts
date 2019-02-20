export class Options {

  // type: 'question',
  // buttons: ['Cancel', 'Yes, please', 'No, thanks'],
  // defaultId: 2,
  // title: 'Questions',
  // message: 'Do you want to do this?',
  // detail: 'It does not really matter',
  // checkboxLabel: 'Remember my answer',
  // checkboxChecked: true

  type: string;
  buttons: Array<string>;
  defaultId: number;
  title: string;
  message: string;
  detail: string;
  checkboxLabel: string;
  checkboxChecked: boolean;

  constructor(type: string, title: string, message: string) {
    this.type = type;
    this.title = title;
    this.message = message;

    this.buttons = ['Cancel', 'Yes, please', 'No, thanks'];
    this.defaultId = 2;
    this.detail = 'Some details';
    this.checkboxLabel = 'Checkbox label';
    this.checkboxChecked = false;
  }

}
