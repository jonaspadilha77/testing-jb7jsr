import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class UploadRecomendacoesService {

  private rotaNode;
  private $status = new Subject();
  public UPLOAD_URL = `${this.rotaNode}/api/carteira-recomendada`;


  constructor(private http: HttpClient, @Inject('env') private env)  {}

  public upload(file: File): Observable<any> {

    // prepara o arquivo vindo do form
    const formData: FormData = new FormData();
    formData.append('arquivo', file);

    // metodo que executa o post
    return this.http.post(this.UPLOAD_URL, formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(

      // mapeia os eventos em processo de upload
      map(event => {
        switch (event.type) {

          // atualiza status de progresso
          case HttpEventType.UploadProgress:
            this.$status.next({
              progress: Math.round(100 * event.loaded / event.total)
            });
            break;

          // completa o upload
          case HttpEventType.Response:
            this.$status.complete();
            return event;
        }
      }),

      // Verifica alguro erro
      catchError((error: HttpErrorResponse) => {
        this.$status.error(error);
        return of(`Falha no upload ${file.name}`);
      }));
  }

  // observable para informar status
  public getStatus(): Observable<any> {
    return this.$status.asObservable();
  }

}
