import { Component } from '@angular/core';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component {
  numInput: number = 0;
  serFibo: boolean = false;

  constructor() { }

  verifyFibo() {
    let n1 = 0;
    let n2 = 1;
    let i = 2;

    while (n2 < this.numInput) {
      const fib3 = n1 + n2;
      n1 = n2;
      n2 = fib3;
      i++;
    }

    this.serFibo = n2 === this.numInput;
  }

  imageUrl: string = 'assets/questao2imagem1.jpg';
  imageIndex: number = 1;
  imageList: string[] = ['assets/questao2imagem1.jpg', 'assets/questao2imagem2.jpg'];

  getImageStyle() {
    if (this.imageUrl.includes('questao2imagem1')) {
      return { width: '350px', height: '400px'};
    } else if (this.imageUrl.includes('questao2imagem2')) {
      return { width: '800px', height: '219px' };
    } else {
      return {};
    }
  }

  changeImage() {
    this.imageIndex = (this.imageIndex + 1) % this.imageList.length;
    this.imageUrl = this.imageList[this.imageIndex];
  }
}
