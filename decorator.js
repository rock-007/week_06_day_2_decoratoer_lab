const Decorator = function (name) {
    this.name = name;
    this.stock = []
};

Decorator.prototype.addPaint = function (paint) {
    this.stock.push(paint);
}

module.exports = Decorator;