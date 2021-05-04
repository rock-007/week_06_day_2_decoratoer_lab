const assert = require('assert');
const Decorator = require('../decorator.js')
const Paint = require('../paint.js')
const Room = require('../room.js')

describe('decorator', function () {
    beforeEach(function(){
        decorator = new Decorator("Adam");
        paint =new Paint("Red");
    });

    it('should have a name', function() {
        const actual = decorator.name;
        assert.strictEqual(actual, "Adam");
    });

    it('should have a stock', function() {
        const actual = decorator.stock;
        assert.strictEqual(actual.length, 0);
    });
    
    it('added paint in the stock', function() {
        decorator.addPaint(paint)
        const actual = decorator.stock;
        assert.strictEqual(actual.length, 1);
    });

});



describe('paint', function () {
    beforeEach(function(){
        paint = new Paint("Red", 5);
    });

    it('should have a colour', function() {
        const actual = paint.colour;
        assert.strictEqual(actual, "Red");
    });
    
    it('should be full', function() {
        const actual = paint.totalLitres;
        assert.strictEqual(actual, 5);
    });

    it('should be able to empty itself', function () {
        paint.emptySelf();
        const actual = paint.totalLitres
        
        assert.strictEqual(actual, 0);
    })

});

describe('room', function () {
    beforeEach(function(){
        room = new Room("Bedroom", 20);
    });

    it('should have a name', function() {
        const actual = room.name;
        assert.strictEqual(actual, "Bedroom");
    });
    it('should have an area', function() {
        const actual = room.area;
        assert.strictEqual(actual, 20);
    });
    it('should start unpainted', function () {
        const actual = room.painted;
        assert.strictEqual(actual, false);
    })
    it('should be able to be painted', function () {
        room.roomPainted();
        const actual = room.painted;
        assert.stroctEqual(actual, true);
    })
});