import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';
import { Options } from '../../model/options';
import { FileService } from '../../shared/file/file.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  barEvents: string[] = [];
  barOpened: boolean;

  constructor(private electron: ElectronService, private file: FileService) {

  }

  openSubmenu() {
    console.log('open sub.');
    this.barOpened = true;
  }

  saveDialog() {
    this.file.saveFile('aa');
  }

  openDialog() {
    const options = new Options('question', 'Title', 'message text');
    this.electron.remote.dialog.showMessageBox(null, options, (response, checkboxChecked) => {
      console.log('Response = ', response);
      console.log('Checkbox = ', checkboxChecked);
    });
  }

  ngOnInit() { }
}
