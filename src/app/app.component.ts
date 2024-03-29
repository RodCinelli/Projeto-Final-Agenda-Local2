import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { register } from 'swiper/element/bundle';
import { Router } from '@angular/router'; // Importar Router


register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})


export class AppComponent {
  abrirLogin() {
    this.router.navigateByUrl('/login'); // Redireciona para a página de login
  }
  

  public userName: string = ''; public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Produtos', url: '/produtos', icon: 'bag-handle' },
    { title: 'Promoções', url: '/folder/promocoes', icon: 'pricetags' },
    { title: 'Lojas', url: '/folder/lojas', icon: 'storefront' },
/*     { title: 'Login', url: '/folder/login', icon: 'person-circle' }, */
    { title: 'Contato', url: '/folder/contato', icon: 'call' },
  ];
  

  public adminPages = [
    { title: 'Cadastrar Produtos', url: '/cad-produtos', icon: 'bag-add' },
    { title: 'Editar Produtos', url: '/edit-produtos', icon: 'create' },
    { title: 'Deletar Produtos', url: '/delete-produtos', icon: 'trash' },
  ];

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userName = user.displayName || user.email || 'Usuário sem nome';
      } else {
        this.userName = 'Usuário não logado';
      }
    });
  }

}
