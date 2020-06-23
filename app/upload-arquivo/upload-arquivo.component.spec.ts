import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadArquivoComponent } from './upload-arquivo.component';
import { UploadArquivoBytesPipe } from './upload-arquivo-bytes.pipe';
import { Subject } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('UploadArquivoComponent', () => {
  let component: UploadArquivoComponent;
  let fixture: ComponentFixture<UploadArquivoComponent>;
  let fileUpload: DebugElement;



  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [UploadArquivoComponent, UploadArquivoBytesPipe],
      imports: []
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadArquivoComponent);
    component = fixture.componentInstance;
    component.resetObservable = new Subject();
    fileUpload = fixture.debugElement.query(By.css('input[type=file]'));
    fixture.detectChanges();
  });
  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar', () => {
    expect(component).toBeDefined();
  });

  it('deve pode escolhar um arquivo para submter', () => {

    const arquivo = new File([new ArrayBuffer(44320)], 'sample.xlsx', {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });


console.log(fileUpload)
    // fileUpload.nativeElement.files.item(arquivo);

    // let test;

    // component.obterArquivo.subscribe(value => test = value);

    // fileUpload.nativeElement.dispatchEvent(new Event('change'));
    // fileUpload.triggerEventHandler('change', null);



    // expect(component.arquivo.name).toEqual(arquivo.name);
    // expect(component.arquivo.type).toEqual(arquivo.type);
  });
});
