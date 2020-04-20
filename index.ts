export const str = (value: string): object => {
  return { '@__type': 'str', '#text': String(value) };
}
