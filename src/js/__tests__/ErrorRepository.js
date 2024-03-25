import ErrorRepository from '../ErrorRepository';

test('To add new error', () => {
    const repo = new ErrorRepository();
    repo.addError(1, 'Error 001');
    repo.addError(2, 'Error 002');
    repo.addError(3, 'Error 003');
    const res = Object.fromEntries(repo.repository);
    expect(res).toEqual({1: 'Error 001', 2: 'Error 002', 3: 'Error 003'});
});

test('To translate Error by code', () => {
    const repo = new ErrorRepository();
    repo.addError(1, 'Error 001');
    repo.addError(2, 'Error 002');
    const res = repo.translate(2);
    expect(res).toBe('Error 002');
});

test('To get "Unknown error"', () => {
    const repo = new ErrorRepository();
    repo.addError(1, 'Error 001');
    const res = repo.translate(2);
    expect(res).toBe('Unknown error');
});
