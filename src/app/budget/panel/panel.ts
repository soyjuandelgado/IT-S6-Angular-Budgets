import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-panel',
  imports: [ReactiveFormsModule],
  templateUrl: './panel.html',
  styleUrl: './panel.scss',
})
export class Panel {
  pagePrice = 30;
  langPrice = 30;
  totalPaginas=0;
  numPages = new FormControl(1)

  addPage(){
    if (this.numPages.value! < 100)
      this.changePages(this.numPages.value! + 1);
  }
  substractPage(){
    if (this.numPages.value! > 1)
      this.changePages(this.numPages.value! - 1);
  }

  changePages(value:number){
    this.numPages.patchValue(value);
    this.calculatePages()
  }
  calculatePages(){
    this.totalPaginas = this.numPages.value! * 30;
  }
}


