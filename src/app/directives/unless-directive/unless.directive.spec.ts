import { TemplateRef, ViewContainerRef } from '@angular/core';
import { UnlessDirective } from './unless.directive';

describe('UnlessDirective', () => {
  let mockTemplateRef: jasmine.SpyObj<TemplateRef<unknown>>;
  let mockViewContainerRef: jasmine.SpyObj<ViewContainerRef>;
  let directive: UnlessDirective;

  beforeEach(() => {
    mockTemplateRef = jasmine.createSpyObj('TemplateRef', ['']);
    mockViewContainerRef = jasmine.createSpyObj('ViewContainerRef', [
      'createEmbeddedView',
      'clear',
    ]);
    directive = new UnlessDirective(mockTemplateRef, mockViewContainerRef);
  });

  it('should clear view if condition is true', () => {
    directive.unless = true;
    expect(mockViewContainerRef.clear).toHaveBeenCalled();
  });

  it('should create embedded view if condition is false', () => {
    directive.unless = false;
    expect(mockViewContainerRef.createEmbeddedView).toHaveBeenCalledWith(
      mockTemplateRef
    );
  });
});
