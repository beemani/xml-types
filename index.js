"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.str = function (value) {
    if (value === void 0) { value = ''; }
    return { '@__type': 'str', '#text': String(value) };
};
exports.bool = function (value) {
    if (value === void 0) { value = false; }
    if (Array.isArray(value)) {
        return { '@__type': 'bool', '@__count': value.length, '#text': value.join(' ') };
    }
    else {
        return { '@__type': 'bool', '#text': Boolean(value) };
    }
};
exports.float = function (value) {
    if (value === void 0) { value = 0.0; }
    return { '@__type': 'float', '#text': value };
};
exports.double = function (value) {
    if (value === void 0) { value = 0.0; }
    return { '@__type': 'double', '#text': value };
};
exports.bin = function (value) {
    if (value === void 0) { value = ''; }
    return { '@__type': 'str', '@__size': value.length, '#text': value };
};
exports.time = function (value) {
    if (value === void 0) { value = new Date(); }
    return { '@__type': 'time', '#text': value.getTime() };
};
exports.ip4 = function (value) {
    if (value === void 0) { value = '0.0.0.0'; }
    return { '@__type': 'ip4', '#text': value };
};
exports.s8 = function (value) {
    if (value === void 0) { value = 0; }
    if (Array.isArray(value)) {
        return { '@__type': 's8', '@__count': value.length, '#text': value.join(' ') };
    }
    else {
        return { '@__type': 's8', '#text': Number(value) };
    }
};
exports.s16 = function (value) {
    if (value === void 0) { value = 0; }
    if (Array.isArray(value)) {
        return { '@__type': 's16', '@__count': value.length, '#text': value.join(' ') };
    }
    else {
        return { '@__type': 's16', '#text': Number(value) };
    }
};
exports.s32 = function (value) {
    if (value === void 0) { value = 0; }
    if (Array.isArray(value)) {
        return { '@__type': 's32', '@__count': value.length, '#text': value.join(' ') };
    }
    else {
        return { '@__type': 's32', '#text': Number(value) };
    }
};
exports.s64 = function (value) {
    if (value === void 0) { value = 0; }
    if (Array.isArray(value)) {
        return { '@__type': 's64', '@__count': value.length, '#text': value.join(' ') };
    }
    else {
        return { '@__type': 's64', '#text': Number(value) };
    }
};
exports.u8 = function (value) {
    if (value === void 0) { value = 0; }
    if (Array.isArray(value)) {
        return { '@__type': 'u8', '@__count': value.length, '#text': value.join(' ') };
    }
    else {
        return { '@__type': 'u8', '#text': Number(value) };
    }
};
exports.u16 = function (value) {
    if (value === void 0) { value = 0; }
    if (Array.isArray(value)) {
        return { '@__type': 'u16', '@__count': value.length, '#text': value.join(' ') };
    }
    else {
        return { '@__type': 'u16', '#text': Number(value) };
    }
};
exports.u32 = function (value) {
    if (value === void 0) { value = 0; }
    if (Array.isArray(value)) {
        return { '@__type': 'u32', '@__count': value.length, '#text': value.join(' ') };
    }
    else {
        return { '@__type': 'u32', '#text': Number(value) };
    }
};
exports.u64 = function (value) {
    if (value === void 0) { value = 0; }
    if (Array.isArray(value)) {
        return { '@__type': 'u64', '@__count': value.length, '#text': value.join(' ') };
    }
    else {
        return { '@__type': 'u64', '#text': Number(value) };
    }
};
