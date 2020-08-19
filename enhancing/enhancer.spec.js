const enhancer = require("./enhancer.js");

describe("repair()", function () {
  it("should repair an actual item", function () {
    const item = {
      weapon: "fist weapon",
      durability: 50,
      enhancement: 15,
    };

    const expected = {
      weapon: "fist weapon",
      durability: 100,
      enhancement: 15,
    };
    const actual = enhancer.repair(item);
    expect(actual).toStrictEqual(expected);
  });

  it("should return a message if no durability found", function() {
      const item = {
          weapon: "Sword",
          enhancement: 15
      }
      const expected = { message: "your item has no durability"}
      const actual = enhancer.repair(item)
      expect(actual).toStrictEqual(expected)
  });

  it("should return a message you item has max durability", function() {
      const item = {
          weapon: "Mace",
          durability: 100,
          enhancement: 15
      }

      const expected = { message: "your item already has max durability"}
      const actual = enhancer.repair(item)
      expect(actual).toStrictEqual(expected)
  })

  it('should return a message if durability is less than 0', function() {
      const item = {
          weapon: "polearm",
          durability: -5,
          enhancement: 15
      }

      const expected = { message: "your item is broken"}
      const actual = enhancer.repair(item)
      expect(actual).toStrictEqual(expected)
  })
});
