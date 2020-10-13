import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StandingpopupPage } from './standingpopup.page';

describe('StandingpopupPage', () => {
  let component: StandingpopupPage;
  let fixture: ComponentFixture<StandingpopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandingpopupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StandingpopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
