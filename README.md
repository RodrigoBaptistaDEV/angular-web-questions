##Descrição

Aplicação Web Angular - página demonstrativa de questões
pontos interessantes:
- a página é dividida em cinco componentes Sections para facilitar a modularidade e manutenção do código
- botões funcionais com troca de desing interativo.
- header com background com efeito blur usando backdrop filter
- duas áreas no site que mudam a imagem confome o clique no botão interativo. Devido a diferença dos tamanhos de imagem a serem mostrados a solução inserida foi controlar o tamanho do arquivo por uma condicional que dá diferentes tamanhos, podendo organizar o tamanho final a ser renderizado. Aplicado no HTML pelo ngStyle.
- Função de verificação de numero na sequencia Fibonnaci. Input html com NgModel e função feita no componente Ts. O resultado da verificação altera uma tag p dando diferentes classes CSS através de ngClass
- função de inversão de string. Input html com ngModel e função feita no component Ts.
- utilização do CSS global para definição de estilos gerais na pagina, como textos e container. 

# Pagetarget

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
