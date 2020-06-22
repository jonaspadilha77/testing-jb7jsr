import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatBadgeModule,
    MaterialModule
} from '@angular/material';
import { UploadArquivoComponent } from './upload-arquivo.component';
import { UploadArquivoBytesPipe } from './upload-arquivo-bytes.pipe';
@NgModule({
    declarations: [UploadArquivoComponent, UploadArquivoBytesPipe],
    imports: [
      MaterialModule
    ],
    exports: [UploadArquivoComponent, UploadArquivoBytesPipe]
})
export class UploadArquivoModule { }
