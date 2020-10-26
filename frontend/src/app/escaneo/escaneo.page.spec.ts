import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscaneoPage } from './escaneo.page';

describe('EscaneoPage', () => {
  let component: EscaneoPage;
  let fixture: ComponentFixture<EscaneoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscaneoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscaneoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
