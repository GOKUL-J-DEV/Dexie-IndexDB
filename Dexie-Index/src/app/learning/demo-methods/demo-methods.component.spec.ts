import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMethodsComponent } from './demo-methods.component';

describe('DemoMethodsComponent', () => {
  let component: DemoMethodsComponent;
  let fixture: ComponentFixture<DemoMethodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoMethodsComponent]
    });
    fixture = TestBed.createComponent(DemoMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
