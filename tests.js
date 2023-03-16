// Unit tests for the helloWorld function

const randomBoolean = Boolean(Math.round(Math.random()));




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


describe('isEven', function (){
    it('should be a defined function', function(){
        expect(typeof isEven).toBe('function');
    });
    it('should return true if executed with 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true if executed with -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false if executed with 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false if executed with "banana"', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true if executed with "8"', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false if executed with Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed a boolean ' + randomBoolean, function() {
        expect(isEven(randomBoolean)).toBe(false);
    });
    it("should never return 'undefined' when called", function() {
        expect(isEven()).not.toBe(undefined);
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

describe('isVowel', function(){
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return true when passed "A"', function(){
        expect(isVowel("A")).toBe(true);
    });
    it('should return true when passed "a"', function(){
        expect(isVowel("a")).toBe(true);
    });
    it('should return false when passed "y"', function(){
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when passed "4"', function(){
        expect(isVowel("4")).toBe(false);
    });
    it('should return false when passed a boolean ' + randomBoolean, function() {
        expect(isVowel(randomBoolean)).toBe(false);
    });
    it('should return false when passed "banana"', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when passed an undefined answer', function () {
        expect(isVowel()).toBe(false);
    });
});

describe('add', function (){
    it('should be defined as a function', function () {
        expect(typeof add).toBe('function');
    });
    it('should return 5 when passed 2 + 3', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 when passed (-3) + (-3)', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 when passed 5 + 6', function () {
        expect(add("5", 6)).toBe(11);
    });
    it('should return 6 when passed "-4" + "10"', function () {
        expect(add("-4", "10")).toBe(6);
    });
    it('should return "NaN" when passed "banana" and "split"', function () {
        expect(add("banana", "split")).toBe("NaN");
    });
    it('should return "NaN" when passed 2 and "apples"', function () {
        expect(add(2, "apples")).toBe("NaN");
    });
    it('should return "NaN" when passed "undefined"', function () {
        expect(add()).toBe("NaN");
    });
});