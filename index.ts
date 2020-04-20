export const str = (value: string): object => {
  return { '@__type': 'str', '#text': String(value) };
}

export const s32 = (value: number | Array<number>): object => {
  if (Array.isArray(value)) {
    return { '@__type': 's32', '@__count': value.length, '#text': value.join(' ') };
  } else {
    return { '@__type': 's32', '#text': Number(value) };
  }
}

export const u8 = (value: number | Array<number>): object => {
  if (Array.isArray(value)) {
    return { '@__type': 'u8', '@__count': value.length, '#text': value.join(' ') };
  } else {
    return { '@__type': 'u8', '#text': Number(value) };
  }
}

export const u32 = (value: number | Array<number>): object => {
  if (Array.isArray(value)) {
    return { '@__type': 'u32', '@__count': value.length, '#text': value.join(' ') };
  } else {
    return { '@__type': 'u32', '#text': Number(value) };
  }
}
