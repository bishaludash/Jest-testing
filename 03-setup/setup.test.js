let food = ["Katti roll", "keema naam", "Drum stick", "Chiya"];

describe("Food Testing", () => {
  beforeEach(() => {
    food = ["Katti roll", "keema naam", "Drum stick", "Chiya"];
  });

  afterEach(() => {
    // console.log("Running after test");
  });

  it("Test last food", () => {
    food.push("Cheese ball");
    expect(food[food.length - 1]).toBe("Cheese ball");
  });

  it("Test last food", () => {
    food.unshift("momo");
    expect(food[0]).toBe("momo");
  });

  it("Get array length", () => {
    expect(food.length).toBe(4);
  });
});

describe("Random testing", () => {
  it("random test", () => {
    const a = 34;
    expect(a).toBe(34);
  });
});
