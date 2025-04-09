import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatividadComponent } from './creatividad.component';

describe('CreatividadComponent', () => {
  let component: CreatividadComponent;
  let fixture: ComponentFixture<CreatividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatividadComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});