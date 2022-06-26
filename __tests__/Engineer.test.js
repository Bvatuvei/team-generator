const Engineer = require("../lib/Engineer");

test("When I create a new engineer it has to be an Object", () => {
    const testObj = new Engineer()
    expect(typeof(testObj)).toBe("object")
})

test("When I pass a string on the first parameter of the class, I expect the name property to be equal to it", () => {
    const testObj = new Engineer("James")
    expect(testObj.name).toBe("James")
})