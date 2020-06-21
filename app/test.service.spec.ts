import { TestBed, async } from '@angular/core/testing';

import { UploadRecomendacoesService } from './test.service';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpEventType, HttpClient, HttpProgressEvent,HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { skipWhile } from 'rxjs/operators';
import { environment} from './enviroment';

const file = new File(['sample'], 'sample.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

describe('UploadRecomendacoesService', () => {
  let httpTestingController: HttpTestingController;
  let service: UploadRecomendacoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: 'env',
          useValue: environment
        },
        UploadRecomendacoesService
      ]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(UploadRecomendacoesService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  describe('#upload() upload da planilha de recomendacoes', () => {
    it('deve retornar o retorno correto', () => {
      const mockResponse = {
        success: 'sucess'
      }

      service.upload(file).subscribe();

      httpTestingController.expectOne(service.UPLOAD_URL)
      .flush(mockResponse);
    })


    it('deve retornar um erro 404', () => {
      service.upload(file).subscribe(
        data => {
          if (data) {
            expect(data).toEqual(`Falha no upload ${file.name}`);
          }
        }
      );
      httpTestingController.expectOne(service.UPLOAD_URL)
      .flush('404 error', { status: 404, statusText: 'Not Found' });
    });

    it('#upload deve reportar o progresso do upload', (done) => {

      service.getStatus().pipe(
        skipWhile((status: any) => status.progress === 0)
      ).subscribe(
        (status: any) => {
          expect(status.progress).toEqual(70);
          done();
        }
      )

      service.upload(file).subscribe();

      const req = httpTestingController.expectOne(service.UPLOAD_URL);
      expect(req.request.method).toEqual('POST');
      req.event({ type: HttpEventType.UploadProgress, loaded: 7, total: 10 });
    });

  });

});
