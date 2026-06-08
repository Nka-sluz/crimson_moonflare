import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({ selector: 'img', standalone: true })
export class ImgLoadDirective implements OnInit {
  constructor(private el: ElementRef<HTMLImageElement>) {}

  ngOnInit(): void {
    const img = this.el.nativeElement;
    if (!img.complete || img.naturalWidth === 0) {
      img.classList.add('img-loading');
      img.parentElement?.classList.add('img-skeleton');
    }
  }

  @HostListener('load')
  onLoad(): void {
    this.el.nativeElement.classList.remove('img-loading');
    this.el.nativeElement.parentElement?.classList.remove('img-skeleton');
  }

  @HostListener('error')
  onError(): void {
    this.el.nativeElement.classList.remove('img-loading');
    this.el.nativeElement.parentElement?.classList.remove('img-skeleton');
  }
}
