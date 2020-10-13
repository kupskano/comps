import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StandingPage } from './standing.page';

describe('StandingPage', () => {
  let component: StandingPage;
  let fixture: ComponentFixture<StandingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
