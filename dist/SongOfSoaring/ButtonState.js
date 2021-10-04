"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Z64Input = exports.Button = exports.ButtonState = void 0;
var ButtonState;
(function (ButtonState) {
    ButtonState[ButtonState["Up"] = 0] = "Up";
    ButtonState[ButtonState["Pressed"] = 1] = "Pressed";
    ButtonState[ButtonState["Down"] = 2] = "Down";
})(ButtonState = exports.ButtonState || (exports.ButtonState = {}));
class Button {
    state = 0;
    invokeTime = 0;
    constructor(inState = 0, inTime = 0) {
        this.state = inState;
        this.invokeTime = inTime;
    }
}
exports.Button = Button;
class Z64Input {
    Buttons = new Array(15).fill(new Button());
    ButtonFlags = [
        0x0001,
        0x0002,
        0x0004,
        0x0008,
        0x0010,
        0x0020,
        0x1000,
        0x2000,
        0x8000,
        0x4000,
        0x0100,
        0x0200,
        0x0400,
        0x0800 //Dpad Up
    ];
    get CRight() {
        return this.Buttons[0];
    }
    get CLeft() {
        return this.Buttons[1];
    }
    get CDown() {
        return this.Buttons[2];
    }
    get CUp() {
        return this.Buttons[3];
    }
    get RB() {
        return this.Buttons[4];
    }
    get LB() {
        return this.Buttons[5];
    }
    get Start() {
        return this.Buttons[6];
    }
    get Z() {
        return this.Buttons[7];
    }
    get A() {
        return this.Buttons[8];
    }
    get B() {
        return this.Buttons[9];
    }
    get DRight() {
        return this.Buttons[10];
    }
    get DLeft() {
        return this.Buttons[11];
    }
    get DDown() {
        return this.Buttons[12];
    }
    get DUp() {
        return this.Buttons[13];
    }
    joystickX = 0;
    joystickY = 0;
    lastTime = 0;
    get scaledJoyX() {
        return this.joystickX / 127;
    }
    get scaledJoyY() {
        return this.joystickY / 127;
    }
    emulator;
    controllerPtr = 0;
    constructor(inEmulator, inAddr) {
        this.emulator = inEmulator;
        this.controllerPtr = inAddr;
        this.Buttons = new Array(15).fill(new Button());
    }
    step(time, logger = false) {
        var deltaTime = time - this.lastTime;
        this.lastTime = time;
        var buttonInput = this.emulator.rdramRead16(this.controllerPtr);
        this.joystickX = this.emulator.rdramReadS8(this.controllerPtr + 2);
        this.joystickY = this.emulator.rdramReadS8(this.controllerPtr + 3);
        var i = 0;
        for (i = 0; i < this.Buttons.length; i++) {
            if ((buttonInput & this.ButtonFlags[i]) === 0)
                this.Buttons[i] = new Button();
            if ((buttonInput & this.ButtonFlags[i]) === this.ButtonFlags[i]) {
                if (this.Buttons[i].state === ButtonState.Up)
                    this.Buttons[i] = new Button(ButtonState.Pressed, deltaTime);
                else if (this.Buttons[i].state === ButtonState.Pressed)
                    this.Buttons[i] = new Button(ButtonState.Down, this.Buttons[i].invokeTime + deltaTime);
            }
        }
    }
}
exports.Z64Input = Z64Input;
//# sourceMappingURL=ButtonState.js.map