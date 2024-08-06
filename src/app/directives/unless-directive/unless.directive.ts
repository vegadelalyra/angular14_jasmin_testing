import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[unless]',
})
export class UnlessDirective {
  @Input() set unless(condition: boolean) {
    if (condition) {
      this.viewContainerRef.clear();
    } else {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainerRef: ViewContainerRef
  ) {}
}
