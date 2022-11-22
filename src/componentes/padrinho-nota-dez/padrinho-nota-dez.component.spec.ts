import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadrinhoNotaDezComponent } from './padrinho-nota-dez.component';

describe('PadrinhoNotaDezComponent', () => {
  let component: PadrinhoNotaDezComponent;
  let fixture: ComponentFixture<PadrinhoNotaDezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadrinhoNotaDezComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadrinhoNotaDezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
