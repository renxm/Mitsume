var Background = (function (_super) {    
    function Background() {
        Background.super(this);
        Laya.
        Laya.init(480, 852);
    }
    Laya.class(Background, "Background", _super);
    var _proto = Background.prototype;
    _proto.onLoop = function(){
        this.y += 1;
        
    }
})(Laya.Sprite);