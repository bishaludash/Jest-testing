const calculateSum = require("./sum");

// Matchers
describe("Example test", () => {
  it("should add 1+2 to equal 3", () => {
    const res = calculateSum(1, 2);
    expect(res).toBe(3);
  });

  it("Object Assignment", () => {
    const obj = {};
    expect(obj).toEqual({});
  });
});

describe("Truthy or falsy", () => {
  it("null", () => {
    const n = null;
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
    expect(n).toBeNull();
    expect(n).not.toBeUndefined();
  });
});

describe("Numbers", () => {
  it(" Two plus two", () => {
    const value = 2 + 2;
    expect(value).toBe(4);
    expect(value).toBeGreaterThan(3);
  });
});

// ====== ASYNC Functions =======
