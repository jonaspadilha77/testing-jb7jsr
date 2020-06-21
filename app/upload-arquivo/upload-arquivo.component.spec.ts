import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadArquivoComponent } from './upload-arquivo.component';

describe('UploadArquivoComponent', () => {
  let component: UploadArquivoComponent;
  let fixture: ComponentFixture<UploadArquivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadArquivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadArquivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  test('deve inicializar', () => {
    expect(component).toBeDefined();
  });
});
