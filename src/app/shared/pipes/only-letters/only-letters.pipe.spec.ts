import { OnlyLettersPipe } from './only-letters.pipe';

describe('OnlyLettersPipe', () => {
  it('create an instance', () => {
    const pipe = new OnlyLettersPipe();
    expect(pipe).toBeTruthy();
  });
});
