import { sum } from "../sum-dummy";

test('should add two number', () => { 
    const result = sum(2,2);
    expect(result).toBe(4);
 })