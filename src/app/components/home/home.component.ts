import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';
import { elementCreate } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private electron: ElectronService) {

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

  ngOnInit() {


  }

}
