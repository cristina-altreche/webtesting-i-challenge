const enhancer = require("./enhancer.js");

describe("repair()", function () {
  it("should repair an actual item", function () {
    const item = {
      weapon: "Sword",
      durability: 50,
      enhancement: 15,
    };

    const expected = {
      weapon: "Sword",
      durability: 100,
      enhancement: 15,
    };
    const actual = enhancer.repair(item);
    expect(actual).toStrictEqual(expected);
  });

  it("should return a message if no durability found");
});
