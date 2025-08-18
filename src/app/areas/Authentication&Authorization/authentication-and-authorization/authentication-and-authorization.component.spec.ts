import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationAndAuthorizationComponent } from './authentication-and-authorization.component';

describe('AuthenticationAndAuthorizationComponent', () => {
  let component: AuthenticationAndAuthorizationComponent;
  let fixture: ComponentFixture<AuthenticationAndAuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticationAndAuthorizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticationAndAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
