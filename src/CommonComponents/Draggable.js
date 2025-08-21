function Draggable() {
    this.version = 2.1;
    this.$dragElem = undefined;
    this.$zoneElem = undefined;
    this.isClicked = false;
    this.margin = 10;
    this.shiftY = 0;
    this.events = {};
    this.helpers = {};
}

Draggable.prototype.init = function ({ dragElem, zoneElemBefore }) {
    this.initHelpers()
    this.initEvents()
    this.$dragElem = document.querySelector(dragElem);
    this.$zoneElem = this.$dragElem.closest(zoneElemBefore);

    this.ontouchstart = this.events.onTouchStart.bind(this)
    this.ontouchmove = this.events.onTouchMove.bind(this)
    this.ontouchend = this.events.onTouchEnd.bind(this)
    this.onmousedown = this.events.onMouseDown.bind(this)

    this.$dragElem.addEventListener("touchstart", this.ontouchstart);
    this.$dragElem.addEventListener("touchmove", this.ontouchmove);
    this.$dragElem.addEventListener("touchend", this.ontouchend);
    this.$dragElem.addEventListener("mousedown", this.onmousedown);

    this.$dragElem.style.cursor = "grab";

    this.$dragElem.ondragstart = function () {
        return false;
    };
};

Draggable.prototype.initHelpers = function () {
    const that = this
    that.helpers.start = function () {
        that.isClicked = true;
        that.$dragElem.style.cursor = "grabbing";
    };

    that.helpers.end = function () {
        that.isClicked = false;
        that.$dragElem.style.cursor = "grab";
    };

    that.helpers.moveBox = function (event) {
        if (!that.isClicked) return;
        let points = that.helpers.getClientPoints(event);

        let boxBottomEdge =
            points.clientY +
            (that.$dragElem.getBoundingClientRect().height - that.shiftY);
        let newB = that.$zoneElem.getBoundingClientRect().bottom - boxBottomEdge;
        let topEdge = that.$zoneElem.offsetHeight - that.$dragElem.offsetHeight;

        if (newB < that.margin) newB = that.margin;
        if (newB > topEdge - that.margin) newB = topEdge - that.margin;

        that.$dragElem.style.bottom = newB + "px";
    };

    that.helpers.getClientPoints = function (event) {
        return event.touches
            ? event.touches[0] || event.changedTouches[0]
            : { clientY: event.clientY, clientX: event.clientX };
    };

    that.helpers.getShiftY = function (event) {
        let points = that.helpers.getClientPoints(event);
        return points.clientY - that.$dragElem.getBoundingClientRect().top;
    };
};

Draggable.prototype.initEvents = function () {
    const that = this
    that.events.onTouchStart = function (event) {
        that.helpers.start();
        that.shiftY = that.helpers.getShiftY(event);
    };

    that.events.onTouchMove = function (event) {
        that.helpers.moveBox(event);
    };

    that.events.onTouchEnd = function (_event) {
        that.helpers.end();
    };

    that.events.onMouseDown = function (event) {
        if (event.target.tagName === "TEXTAREA") return;

        that.helpers.start();
        event.preventDefault();
        that.$dragElem.style.cursor = "grabbing";

        that.shiftY = that.helpers.getShiftY(event);

        document.addEventListener("mousemove", that.events.onMouseMove);
        document.addEventListener("mouseup", that.events.onMouseUp);
    };

    that.events.onMouseMove = function (event) {
        that.helpers.moveBox(event, that.shiftY);
    };

    that.events.onMouseUp = function () {
        that.helpers.end();
        document.removeEventListener("mousemove", that.events.onMouseMove);
        document.removeEventListener("mouseup", that.events.onMouseUp);
    };
};

Draggable.prototype.reset = function (pos) {
    this.$dragElem.style.bottom = pos;
};

Draggable.prototype.unmount = function () {
    this.helpers.end()
    this.$dragElem.style.cursor = "initial";
    this.$dragElem.removeEventListener("touchstart", this.ontouchstart);
    this.$dragElem.removeEventListener("touchmove", this.ontouchmove);
    this.$dragElem.removeEventListener("touchend", this.ontouchend);
    this.$dragElem.removeEventListener("mousedown", this.onmousedown);
};

export default new Draggable();
