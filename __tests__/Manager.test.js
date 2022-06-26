const Manager = require("../lib/Manager");

test("When I create a new employee it has to be an Object", () => {
    const testObj = new Manager()
    expect(typeof(testObj)).toBe("object")
})

test("When I pass a string on the first parameter of the class, I expect the name property to be equal to it", () => {
    const testObj = new Manager("James")
    expect(testObj.name).toBe("James")
})