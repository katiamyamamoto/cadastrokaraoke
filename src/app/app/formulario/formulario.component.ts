import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, HttpClientModule ],
  providers: [HttpClient],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  public name: string = "";
  public cpf: string = "";
  public dob: Date = new Date();
  public phone: string = "";
  public email: string = "";
  constructor(private http: HttpClient){
  }

  public Send(): void{
    const cadastro = {name: this.name, cpf : this.cpf, dob : this.dob, phone: this.phone, email: this.email};
    this.http.post("https://localhost:7006/Cadastro", cadastro).subscribe(() => {
      alert("Cadastro realizado com sucesso, Estamos aguardando voce!");
    })
  }
}
