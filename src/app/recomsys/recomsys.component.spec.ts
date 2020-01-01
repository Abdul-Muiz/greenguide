import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomsysComponent } from './recomsys.component';

describe('RecomsysComponent', () => {
  let component: RecomsysComponent;
  let fixture: ComponentFixture<RecomsysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomsysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomsysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
