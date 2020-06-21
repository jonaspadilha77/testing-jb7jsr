import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadArquivoComponent } from './upload-arquivo.component';
import { UploadArquivoModule } from './upload-arquivo.module'
import { Subject } from 'rxjs';

describe('UploadArquivoComponent', () => {
  let component: UploadArquivoComponent;
  let fixture: ComponentFixture<UploadArquivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UploadArquivoComponent],
      imports: [UploadArquivoModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadArquivoComponent);
    component = fixture.componentInstance;
    component.resetObservable = new Subject();
    fixture.detectChanges();
  });

  test('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  test('deve inicializar', () => {
    expect(component).toBeDefined();
  });
});
