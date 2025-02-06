import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperandoComponent } from './recuperando.component';

describe('RecuperandoComponent', () => {
  let component: RecuperandoComponent;
  let fixture: ComponentFixture<RecuperandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuperandoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
