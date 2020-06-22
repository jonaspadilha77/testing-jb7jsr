import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatBadgeModule
} from '@angular/material';
import { UploadArquivoComponent } from './upload-arquivo.component';
import { UploadArquivoBytesPipe } from './upload-arquivo-bytes.pipe';
@NgModule({
    declarations: [UploadArquivoComponent, UploadArquivoBytesPipe],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatProgressBarModule,
        MatBadgeModule
    ],
    exports: [UploadArquivoComponent, UploadArquivoBytesPipe]
})
export class UploadArquivoModule { }
