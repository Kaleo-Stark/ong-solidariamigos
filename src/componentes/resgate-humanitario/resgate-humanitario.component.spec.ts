import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgateHumanitarioComponent } from './resgate-humanitario.component';

describe('ResgateHumanitarioComponent', () => {
  let component: ResgateHumanitarioComponent;
  let fixture: ComponentFixture<ResgateHumanitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResgateHumanitarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResgateHumanitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
