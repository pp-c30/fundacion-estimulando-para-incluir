import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Registro2Page } from './registro2.page';

describe('Registro2Page', () => {
  let component: Registro2Page;
  let fixture: ComponentFixture<Registro2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registro2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Registro2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
