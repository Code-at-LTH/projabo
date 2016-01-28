var Message = (function () {
    function Message(m) {
        this.m = m;
    }
    Message.prototype.getM = function () {
        return this.m;
    };
    return Message;
})();

var msg = new Message("hey");
alert(msg.getM());
