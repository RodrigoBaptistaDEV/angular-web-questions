import { Component } from '@angular/core';

@Component({
  selector: 'app-question5',
  templateUrl: './question5.component.html',
  styleUrls: ['./question5.component.css']
})
export class Question5Component {
  userString: string = '';
  changedString: string = 'gnirst';

  inverterString() {
    this.changedString = '';
    for (let i = this.userString.length - 1; i >= 0; i--) {
      this.changedString += this.userString[i];
    }
  }

  imageUrl: string = 'assets/questao5imagem1.jpg';
  imageIndex: number = 1;
  imageList: string[] = ['assets/questao5imagem1.jpg', 'assets/questao5imagem2.jpg'];

  getImageStyle() {
    if (this.imageUrl.includes('questao5imagem1')) {
      return { width: '593px', height: '229px' };
    } else if (this.imageUrl.includes('questao5imagem2')) {
      return { width: '526px', height: '117px' };
    } else {
      return {};
    }
  }

  changeImage() {
    this.imageIndex = (this.imageIndex + 1) % this.imageList.length;
    this.imageUrl = this.imageList[this.imageIndex];
  }
}
