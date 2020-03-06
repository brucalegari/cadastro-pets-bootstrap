import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastramentoPetsComponent } from './cadastramento-pets.component';

describe('CadastramentoPetsComponent', () => {
  let component: CadastramentoPetsComponent;
  let fixture: ComponentFixture<CadastramentoPetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastramentoPetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastramentoPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
