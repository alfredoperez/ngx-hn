import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'loading-screen',
  template: `
   <div class="spinner"></div>
  `,
  styles: [`
    .spinner {
      width: 40px;
      height: 40px;
      margin: 100px auto;
      background-color: #333;

      border-radius: 100%;
      -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
      animation: sk-scaleout 1.0s infinite ease-in-out;
    }

    @-webkit-keyframes sk-scaleout {
      0% {
        -webkit-transform: scale(0)
      }
      100% {
        -webkit-transform: scale(1.0);
        opacity: 0;
      }
    }

    @keyframes sk-scaleout {
      0% {
        -webkit-transform: scale(0);
        transform: scale(0);
      }
      100% {
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
        opacity: 0;
      }
    }`]
})
export class LoadingScreen {
}
@NgModule({
  declarations: [LoadingScreen],
  imports: [RouterModule.forChild([
    {path: 'loading', component: LoadingScreen}
  ])],
})
export class LoadingModule {
}
