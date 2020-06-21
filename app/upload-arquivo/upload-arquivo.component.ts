import { Component, ViewChild, ElementRef, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
@Component({
    selector: 'app-upload-arquivo'
})
export class UploadArquivoComponent implements OnInit, OnDestroy {

    @ViewChild('fileUpload') fileUpload: ElementRef;
    @Input() accept: string;
    @Input() status: {
        progress: number;
    };
    @Input() resetObservable: Observable<boolean>;
    @Output() obterArquivo = new EventEmitter();
    @Output() enviarArquivo = new EventEmitter<File>();
    $resetSubs: Subscription;
    arquivo: File;

    ngOnInit() {
        this.$resetSubs = this.resetObservable.subscribe((reset: boolean) => {
            if (reset) {
                this.onReset();
            }
        });
    }

    ngOnDestroy() {
        this.$resetSubs.unsubscribe();
    }

    abrir() {
        this.fileUpload.nativeElement.click();
        this.fileUpload.nativeElement.onchange = () => {
            this.arquivo = this.fileUpload.nativeElement.files[0];
        };
        this.obterArquivo.emit(this.arquivo);
    }

    hasFile() {
        return this.fileUpload.nativeElement.files.length > 0;
    }


    clickUpload() {
        this.enviarArquivo.emit(this.arquivo);
    }

    onReset() {
        this.fileUpload.nativeElement.value = null;
        this.obterArquivo.emit(null);
        this.status.progress = 0;
    }
}
