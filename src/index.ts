let id: number = 5
let company: string = 'Gangs Solutions'
let isPublished: boolean = true
let x: any = 'Hello'
let age: number = 32

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'Gangadhar', true]

// Tuple Array
let employee: [number, string][]

employee = [
  [1, 'Gangadhar'],
  [2, 'Mounika'],
  [3, 'Mullapudi'],
]

// Union
let pid: string | number
pid = '22'

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// objects

// const user: {
//     id: number,
//     name: string
// } = {
//     id: 1,
//     name: 'John'
// }

// or your can do like this

type User = {
  id: number
  name: string
}
const user: User = {
  id: 1,
  name: 'John',
}

// Type Assertion
let cid: any = 1
let custId = <number>cid
// Or you can do this
let customerId = cid as number

// Functions
function addNum(x: number, y: number): number {
  return x + y
}

console.log(addNum(1, 2))

function log(message: string | number): void {
  console.log(message)
}

// Interfaces
interface UserInterface {
  readonly id: number // If you want to make id readonly
  name: string
  age?: number // ? to make it optional
}
const user1: UserInterface = {
  id: 1,
  name: 'John',
}

// type can be used with primitives and unions
type Point = number | string
const p1: Point = 12

interface mathFunc {
  (x: number, y: number): number
}

const add: mathFunc = (x: number, y: number): number => x + y
const sub: mathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
  id: number
  name: string
  register(): string
}
// Classes
// for classes you need to use implements keyword.
class Person implements PersonInterface {
  // you can make a property public, private and protected
  // 1. public default you can access any where
  // 2. private can only be accessed in the class
  // 3. protected can only be access in this class and extended classes
  id: number
  name: string
  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
  register() {
    return `${this.name} is now registered`
  }
}

const Gangadhar = new Person(1, 'Gangadhar Mullapudi')
const Mounika = new Person(2, 'Mounika Ganta')
console.log(Gangadhar, Mounika)
console.log(Gangadhar.register())

// extends
// Subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'Shawn', 'Developer')
console.log(emp.register())

// Generics
// If we don't know what items can be you use any[]
function getArrayWithany(items: any[]): any[] {
  return new Array().concat(items)
}
// Instead of doing any[] you can add a placeholder and declare while using it
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['Mike', 'John', 'Bill'])

// numArray.push('hello')
