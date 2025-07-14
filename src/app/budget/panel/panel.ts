import { Component, EventEmitter, Output } from '@angular/core';
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
  // totalPages = 0;
  // totalLangs = 0;
  numPages = new FormControl(1);
  numLangs = new FormControl(1);

  @Output() numPagesChange = new EventEmitter<number>();
  @Output() numLangsChange = new EventEmitter<number>();

  addPage() {
    if (this.numPages.value! < 100) {
      this.numPages.setValue(this.numPages.value! + 1);
      this.changePages();
    }
  }
  substractPage() {
    if (this.numPages.value! > 1) {
      this.numPages.setValue(this.numPages.value! - 1);
      this.changePages();
      // this.changePages(this.numPages.value! - 1)
    };
  }

  changePages() {

    // this.numPages.patchValue(value);
    this.numPagesChange.emit(this.numPages.value!);
    // this.calculatePages();
  }
  // calculatePages() {
  //   this.totalPages = this.numPages.value! * 30;
  // }


  addLang() {
    if (this.numLangs.value! < 100) this.changeLangs(this.numLangs.value! + 1);
  }
  substractLang() {
    if (this.numLangs.value! > 1) this.changeLangs(this.numLangs.value! - 1);
  }

  changeLangs(value: number) {
    this.numLangs.patchValue(value);
    this.numLangsChange.emit(value);
    // this.calculateLangs();
  }
  // calculateLangs() {
  //   this.totalLangs = this.numLangs.value! * 30;
  // }

}
