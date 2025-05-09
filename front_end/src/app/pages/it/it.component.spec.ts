import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItComponent } from './it.component';

describe('ItComponent', () => {
  let component: ItComponent;
  let fixture: ComponentFixture<ItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
