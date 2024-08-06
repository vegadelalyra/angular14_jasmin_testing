import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { DataService } from './data.service';
import { USERS } from 'src/app/mocks/user';

describe('DataService', () => {
  let dataService: DataService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
    });
    dataService = TestBed.inject(DataService);
    testingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    testingController.verify();
  });

  it('should be created', () => {
    expect(dataService).toBeTruthy();
  });

  it('should get all users', () => {
    dataService.getAllUsers().subscribe((users: any) => {
      expect(users).toBeTruthy;
      expect(users.length).toBe(10);
      const secondUser = users.find((user: any) => user.id === 2);
      expect(secondUser.name).toBe('Jane Smith');
    });

    const mockReq = testingController.expectOne('/api/users');
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(Object.values(USERS));
  });

  it('should get user by id', () => {
    dataService.getUserById(1).subscribe((user: any) => {
      expect(user).toBeTruthy;
      expect(user.name).toBe('John Doe');
    });

    const mockReq = testingController.expectOne('/api/users/1');
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(USERS[0]);
  });

  it('should update the user by id', () => {
    let changes = { age: 25 };
    let modifiedUser = USERS[0];
    modifiedUser.age = 25;

    dataService.updateUser(1, changes).subscribe((user: any) => {
      expect(user).toBeTruthy;
      expect(user.id).toBe(1);
    });

    const mockReq = testingController.expectOne('/api/users/1');
    expect(mockReq.request.method).toEqual('PUT');
    expect(mockReq.request.body.age).toEqual(changes.age);
    mockReq.flush(modifiedUser);
  });
});
