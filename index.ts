export const str = (value: string = ''): object => {
  return { '@__type': 'str', '#text': String(value) };
}

export const bool = (value: number | boolean | Array<boolean> = false): object => {


  if (Array.isArray(value)) {
    console.info(value.reduce((res, x) => res << 1 | x))
    return { '@__type': 'bool', '@__count': value.length, '#text': value.reduce((res, x) => res << 1 | x) };
  } else {
    return { '@__type': 'bool', '#text': Boolean(value) };
  }
}

export const float = (value: number = 0.0): object => {
  return { '@__type': 'float', '#text': value };
}

export const double = (value: number = 0.0): object => {
  return { '@__type': 'double', '#text': value };
}

export const bin = (value: string = ''): object => {
  return { '@__type': 'str', '@__size': value.length, '#text': value };
}

export const time = (value: Date = new Date()): object => {
  return { '@__type': 'time', '#text': value.getTime() };
}

export const ip4 = (value: string = '0.0.0.0'): object => {
  return { '@__type': 'ip4', '#text': value };
}

export const s8 = (value: number | Array<number> = 0): object => {
  if (Array.isArray(value)) {
    return { '@__type': 's8', '@__count': value.length, '#text': value.join(' ') };
  } else {
    return { '@__type': 's8', '#text': Number(value) };
  }
}

export const s16 = (value: number | Array<number> = 0): object => {
  if (Array.isArray(value)) {
    return { '@__type': 's16', '@__count': value.length, '#text': value.join(' ') };
  } else {
    return { '@__type': 's16', '#text': Number(value) };
  }
}

export const s32 = (value: number | Array<number> = 0): object => {
  if (Array.isArray(value)) {
    return { '@__type': 's32', '@__count': value.length, '#text': value.join(' ') };
  } else {
    return { '@__type': 's32', '#text': Number(value) };
  }
}

export const s64 = (value: number | Array<number> = 0): object => {
  if (Array.isArray(value)) {
    return { '@__type': 's64', '@__count': value.length, '#text': value.join(' ') };
  } else {
    return { '@__type': 's64', '#text': Number(value) };
  }
}

export const u8 = (value: number | Array<number> = 0): object => {
  if (Array.isArray(value)) {
    return { '@__type': 'u8', '@__count': value.length, '#text': value.join(' ') };
  } else {
    return { '@__type': 'u8', '#text': Number(value) };
  }
}

export const u16 = (value: number | Array<number> = 0): object => {
  if (Array.isArray(value)) {
    return { '@__type': 'u16', '@__count': value.length, '#text': value.join(' ') };
  } else {
    return { '@__type': 'u16', '#text': Number(value) };
  }
}

export const u32 = (value: number | Array<number> = 0): object => {
  if (Array.isArray(value)) {
    return { '@__type': 'u32', '@__count': value.length, '#text': value.join(' ') };
  } else {
    return { '@__type': 'u32', '#text': Number(value) };
  }
}

export const u64 = (value: number | Array<number> = 0): object => {
  if (Array.isArray(value)) {
    return { '@__type': 'u64', '@__count': value.length, '#text': value.join(' ') };
  } else {
    return { '@__type': 'u64', '#text': Number(value) };
  }
}
