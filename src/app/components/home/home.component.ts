import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  barEvents: string[] = [];
  barOpened: boolean;

  constructor(private electron: ElectronService) {

  }

  openSubmenu() {
    console.log('open sub.');
    this.barOpened = true;
  }

  openDialog() {
    const options = {
      type: 'question',
      buttons: ['Cancel', 'Yes, please', 'No, thanks'],
      defaultId: 2,
      title: 'Questions',
      message: 'Do you want to do this?',
      detail: 'It does not really matter',
      checkboxLabel: 'Remember my answer',
      checkboxChecked: true,
    };

    this.electron.remote.dialog.showMessageBox(null, options, (response, checkboxChecked) => {
      console.log('Response = ', response);
      console.log('Checkbox = ', checkboxChecked);
    });
  }

  ngOnInit() { }
}
