import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

import { Contato } from './contato';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private db: AngularFireDatabase) { }

  insert(contato: Contato) {
      this.db.list('contato').push(contato)
          .then((result: any) => {
            console.log(result.key)
          });
  }

  update(contato: Contato, key: string) {
      this.db.list('contato').update(key,contato)
      .catch((error: any) => {
        console.error(error)
      });
  }

  getAll() {
      return this.db.list('contato')
             .snapshotChanges()
             .pipe(
               map(changes => {
                 return changes.map(c => ({
                   // cria a chave e todos os demais campos
                    key: c.payload.key, ...c.payload.val()
                 }));
               })
             );
  }

  delete(key: string) {
       // remove o contato no Firebase
       this.db.object(`contato/${key}`).remove();
  }
}
