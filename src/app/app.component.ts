import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  miForm;
  ngOnInit() {
      this.miForm = new FormGroup({
      // Podemos inicializar valores:
      firstname: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      lastname: new FormControl("", this.textValidator),
      languages: new FormControl("")
    });
  }

  textValidator (control) {
    if (control.value.length < 3) {
      return { 'lastname': true };
    }
  }

  onSubmit = function(user) {
    console.log(user);
  }
}
