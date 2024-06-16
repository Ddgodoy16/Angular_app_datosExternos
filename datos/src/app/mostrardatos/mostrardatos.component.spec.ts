import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mostrardatos } from './mostrardatos.component';

describe(' Mostrardatos', () => {
  let component: Mostrardatos;
  let fixture: ComponentFixture<Mostrardatos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mostrardatos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mostrardatos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
