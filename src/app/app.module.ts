import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloWorld } from './primercomponente/primer.componente';
import { PokemonComponent } from './pokemon/pokemon.component';
import { UserComponent } from './user/user.component';
import { DataService } from './data.service'

@NgModule({
  declarations: [
    AppComponent,
    HelloWorld,
    PokemonComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
