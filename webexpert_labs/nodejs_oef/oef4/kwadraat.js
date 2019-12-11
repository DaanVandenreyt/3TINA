/*module.exports = function(i){
    return i**2;
}*/

module.exports = function() {
    this.calculate = function(i){
        return i**2;
    }
    return this;
}