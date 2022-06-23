import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipSvgComponent } from './clip-svg.component';

describe('ClipSvgComponent', () => {
  let component: ClipSvgComponent;
  let fixture: ComponentFixture<ClipSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClipSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClipSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
