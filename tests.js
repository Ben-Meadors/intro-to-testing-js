// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('isFive', function(){
    it('should be a defined function', function(){
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean', function(){
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return value 5 if passed 5', function () {
        expect(isFive(5)).toBe(true);
    });
});

describe("sayHello", function(){
    it("Should be a defined function", function(){
        expect(typeof sayHello).toBe("function");
    });
    it("Should return a string when called", function(){
        expect(typeof sayHello()).toBe("string");
    });
    it('Should return string "Hello, Jane!" when executed', function(){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!" when executed', function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!" when executed', function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return string "Hello, World!" when executed', function(){
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return string "Hello, World!" when executed', function(){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return string "Hello, World!" when executed', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});