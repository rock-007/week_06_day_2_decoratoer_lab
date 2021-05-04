const Decorator = function (name) {
    this.name = name;
    this.stock = []
    this.roomsDecorated =[]
};

Decorator.prototype.addPaint = function (paint) {
    this.stock.push(paint);
}

Decorator.prototype.addDecoratorRoom = function(room, color){
    if (this.stock.color == color){
        this.roomsDecorated.push(room)
    }
    
}

module.exports = Decorator;