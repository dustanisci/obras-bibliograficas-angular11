import { FormatNamePipe } from './format-name.pipe';

describe('FormatNamePipe', () => {
  const pipe = new FormatNamePipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should test the formatted name', () => {
    expect(pipe.transform('eduardo duarte')).toEqual('DUARTE, Eduardo');
    expect(pipe.transform('eduardo duarte filho')).toEqual('DUARTE FILHO, Eduardo');
    expect(pipe.transform('eduardo')).toEqual('EDUARDO');
    expect(pipe.transform('eduardo da silva')).toEqual('SILVA, Eduardo da');
    expect(pipe.transform('EDUARDO DUARTE')).toEqual('DUARTE, Eduardo');
    expect(pipe.transform('EDUARDO NETO NETO')).toEqual('NETO NETO, Eduardo');
    expect(pipe.transform('EDUARDO NETO')).toEqual('NETO, Eduardo');
  });

  it('should test get penultimate name', () => {
    expect(pipe.penultimateName(['test1', 'test2', 'test3'])).toEqual('test2');
  });

});
