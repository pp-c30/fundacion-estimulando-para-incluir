import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductoComercioPage } from './producto-comercio.page';

describe('ProductoComercioPage', () => {
  let component: ProductoComercioPage;
  let fixture: ComponentFixture<ProductoComercioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoComercioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductoComercioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
