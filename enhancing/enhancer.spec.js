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

describe("success()", function() {
    it("should increase enhancement by 1", function() {
        const item = {
            weapon: "axe",
            durability: 65,
            enhancement: 15
        }

        const expected = {
            weapon: "axe",
            durability: 65,
            enhancement: 16
        }

        const actual = enhancer.success(item)
        expect(actual).toStrictEqual(expected)
    })

    it("should return item unchanged if greater than or equal to 20", function() {
        const item = {
            weapon: "axe",
            durability: 65,
            enhancement: 20
        }

        const expected = {
            weapon: "axe",
            durability: 65,
            enhancement: 20 
        }

        const actual = enhancer.success(item)
        expect(actual).toStrictEqual(expected)
    })

    it("should give a message if enhancement does not exist", function(){
        const item ={
            weapon: "axe",
            durability: 65
        }

        const expected = { message: "item cannot be enhanced"}
        const actual = enhancer.success(item)
        expect(actual).toStrictEqual(expected)
    })
})

describe("fail()", function() {
    it("should give a message if enhancement does not exist", function() {
        const item = {
            weapon: "axe",
            durability: 65
        }

        const expected = { message: 'item cannot be enhanced'}
        const actual = enhancer.fail(item)
        expect(actual).toStrictEqual(expected)
    })

    it('should reduce durability by 5 if enhancement is less than 15', function(){
        const item = {
            weapon: "axe",
            durability: 65,
            enhancement: 13
        }

        const expected = {
            weapon: "axe",
            durability: 60,
            enhancement: 13
        }

        const actual= enhancer.fail(item)
        expect(actual).toStrictEqual(expected)
    })

    it("should reduce durability by 10 if enhancement is 15", function() {
        const item = {
            weapon: "axe",
            durability: 65,
            enhancement: 15
        }
        const expected = {
            weapon: "axe",
            durability: 55,
            enhancement: 15
        }

        const actual = enhancer.fail(item)
        expect(actual).toStrictEqual(expected)
    })

    it("should reduce durability by 10 and enhancement by 1 if enhancement is at least 17", function() {
        const item = {
            weapon: "axe",
            durability: 65,
            enhancement: 17
        }

        const expected = {
            weapon: "axe",
            durability: 55,
            enhancement: 16
        }

        const actual = enhancer.fail(item)
        expect(actual).toStrictEqual(expected)
    })
})
