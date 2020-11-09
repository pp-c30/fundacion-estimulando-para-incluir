import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImagenPage } from './imagen.page';

describe('ImagenPage', () => {
  let component: ImagenPage;
  let fixture: ComponentFixture<ImagenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImagenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
