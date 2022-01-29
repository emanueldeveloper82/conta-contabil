import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasListarComponent } from './contas-listar.component';

describe('ContasListarComponent', () => {
  let component: ContasListarComponent;
  let fixture: ComponentFixture<ContasListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContasListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
