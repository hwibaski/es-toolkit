export function isPrototype(value: object) {
  const constructor = value?.constructor;
  const prototype = typeof constructor === 'function' ? constructor.prototype : Object.prototype;

  return value === prototype;
}
