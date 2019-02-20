import { Injectable } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private electron: ElectronService) { }

  saveFile(fn: string) {
    const fs = this.electron.fs;
    const dialog = this.electron.remote.dialog;

    const content = 'This is content of a new file';
    const opt = {
      defaultPath: '/'
    };

    dialog.showSaveDialog(null, opt, (fileName) => {
      if (fileName === undefined) {
        console.log('The user clicked button but didnt create a file.');
        return;
      }

      fs.writeFile(fileName, content, (err) => {
        if (err) {
          console.log('An error with creation of the file: ' + err.message);
          return;
        }

        alert('File saved successfuly');
      });
    });

  }

}
