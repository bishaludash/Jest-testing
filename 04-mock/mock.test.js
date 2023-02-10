const axios = require("axios");
const fetchData = require("../02-async/async");

const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};

it("mock callback", () => {
  const mockCallback = jest.fn((x) => 42 + x);
  forEach([5, 6], mockCallback);

  expect(mockCallback.mock.calls.length).toBe(2);
  //   check parameters
  expect(mockCallback.mock.calls[0][0]).toBe(5);
  expect(mockCallback.mock.calls[1][0]).toBe(6);

  //   check results
  expect(mockCallback.mock.results[0].value).toBe(47);
});

it("mock axios", async () => {
  jest.spyOn(axios, "get").mockReturnValueOnce({
    data: {
      id: 1,
      todo: "Learn jest",
    },
  });
  const result = await fetchData(1);
  expect(result.todo).toBe("Learn jest");
});
