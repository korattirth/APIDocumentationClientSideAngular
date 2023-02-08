import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterHeadersComponent } from './parameter-headers.component';

describe('ParameterHeadersComponent', () => {
  let component: ParameterHeadersComponent;
  let fixture: ComponentFixture<ParameterHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParameterHeadersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParameterHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
