const Paint = function (colour, totalLitres) {
    this.colour = colour;
    this.totalLitres = totalLitres;
}


Paint.prototype.emptySelf = function (){
   this.totalLitres = 0
};

module.exports = Paint;