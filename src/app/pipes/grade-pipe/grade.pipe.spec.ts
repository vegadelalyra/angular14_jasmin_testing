import { GradePipe } from './grade.pipe';

describe('GradePipe', () => {
  let pipe: GradePipe;

  beforeEach(() => {
    pipe = new GradePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should assign A grade when mark greater than 89', () => {
    let grade = pipe.transform(93);
    expect(grade).toBe('A');
  });

  it('should assign B grade when mark between 80 and 89', () => {
    let grade = pipe.transform(84);
    expect(grade).toBe('B');
  });

  it('should assign C grade when mark between 70 and 79', () => {
    let grade = pipe.transform(75);
    expect(grade).toBe('C');
  });

  it('should assign D grade when mark between 60 and 69', () => {
    let grade = pipe.transform(68);
    expect(grade).toBe('D');
  });

  it('should assign E grade when mark between 35 and 59', () => {
    let grade = pipe.transform(56);
    expect(grade).toBe('E');
  });

  it('should assign FAIL when mark lesser than 35', () => {
    let grade = pipe.transform(2);
    expect(grade).toBe('FAIL');
  });
  it('should assign B grade when mark between 80 and 89', () => {
    let grade = pipe.transform(84);
    expect(grade).toBe('B');
  });
});
