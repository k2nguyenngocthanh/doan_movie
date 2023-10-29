"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheaterModule = void 0;
const common_1 = require("@nestjs/common");
const theater_service_1 = require("./theater.service");
const theater_controller_1 = require("./theater.controller");
let TheaterModule = class TheaterModule {
};
exports.TheaterModule = TheaterModule;
exports.TheaterModule = TheaterModule = __decorate([
    (0, common_1.Module)({
        controllers: [theater_controller_1.TheaterController],
        providers: [theater_service_1.TheaterService],
    })
], TheaterModule);
//# sourceMappingURL=theater.module.js.map