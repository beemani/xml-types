"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.str = function (value) {
    return { '@__type': 'str', '#text': String(value) };
};
exports.s32 = function (value) {
    if (Array.isArray(value)) {
        return { '@__type': 's32', '@__count': value.length, '#text': value.join(' ') };
    }
    else {
        return { '@__type': 's32', '#text': Number(value) };
    }
};
exports.u8 = function (value) {
    if (Array.isArray(value)) {
        return { '@__type': 'u8', '@__count': value.length, '#text': value.join(' ') };
    }
    else {
        return { '@__type': 'u8', '#text': Number(value) };
    }
};
exports.u32 = function (value) {
    if (Array.isArray(value)) {
        return { '@__type': 'u32', '@__count': value.length, '#text': value.join(' ') };
    }
    else {
        return { '@__type': 'u32', '#text': Number(value) };
    }
};
