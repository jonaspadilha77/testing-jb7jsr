import { Component, ViewChild, ElementRef, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
@Component({
    selector: 'app-upload-arquivo',
    templateUrl: './upload-arquivo.component.html',
    styleUrls: ['./upload-arquivo.component.scss']
})
export class UploadArquivoComponent implements OnInit, OnDestroy {

    @ViewChild('fileUpload') fileUpload: ElementRef;
    @Input() accept: string;
    @Input() status: {
        progress: number;
    };
    @Input() resetObservable: Observable<boolean>;
    @Output() enviarArquivo = new EventEmitter<File>();
    @Output() obterArquivo = new EventEmitter<File>();
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


    public abrir(): void {
        this.fileUpload.nativeElement.click();
        this.fileUpload.nativeElement.onchange = () => {
            this.arquivo = this.fileUpload.nativeElement.files[0];
            this.obterArquivo.emit(this.arquivo);
        };
    }
    public hasFile(): boolean {
        return this.fileUpload && this.fileUpload.nativeElement.files.length > 0;
    }


    public clickUpload(): void {
        this.enviarArquivo.emit(this.arquivo);
    }

    public onReset(): void {
        this.fileUpload.nativeElement.value = null;
        this.status.progress = 0;
    }
}
