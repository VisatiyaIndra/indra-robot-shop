import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogComponent } from './catalog.component';
import { IProduct } from './product.model';

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the correct image URL', () => {
    const product: IProduct = {
      id: 1,
      description: 'A robot head with a camera.',
      name: 'Camera',
      imageName: 'head-camera.png',
      category: 'Heads',
      price: 150.5,
      discount: 0,
    };

    const expectedUrl = 'assets/images/robot-parts/head-camera.png';

    const result = component.getImageUrl(product);

    expect(result).toEqual(expectedUrl);
  });

  it('should get the correct filtered products', () => {
    const expectedFilteredProducts = [
      {
        id: 1,
        description: 'A robot head with a camera.',
        name: 'Camera',
        imageName: 'head-camera.png',
        category: 'Heads',
        price: 150.5,
        discount: 0,
      },
      {
        id: 5,
        description:
          'A robot head with three oscillating eyes -- excellent for surveillance.',
        name: 'Surveillance',
        imageName: 'head-surveillance.png',
        category: 'Heads',
        price: 1255.5,
        discount: 0,
      },
    ];

    component.filter = 'Heads';

    const result = component.getFilteredProducts();

    expect(result).toEqual(expectedFilteredProducts);
  });
});