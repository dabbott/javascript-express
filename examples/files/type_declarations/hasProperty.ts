const myObject: unknown = { name: 'Devin' }

// if ('name' in myObject) {
//   console.log(myObject.name)
// }

export const hasProperty = <O extends object, K extends PropertyKey>(
  obj: O,
  propKey: K
): obj is O & { [key in K]: unknown } => propKey in obj

if (
  typeof myObject === 'object' &&
  myObject !== null &&
  hasProperty(myObject, 'name')
) {
  console.log(myObject.name)
}
