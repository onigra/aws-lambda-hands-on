const main = require("../main");

describe("handler()", () => {
  test("Promise resolve", async () => {
    const event = { message: "foobar" };

    expect.assertions(1);
    return expect(main.handler(event)).resolves.toBe("foobar");
  });
});
