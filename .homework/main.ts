class Stack <T> {
  constructor(private items: T[]  = []) {}
}
class Queue <T> {
  constructor(private items: T[]  = []) {}
}


const stack = new Stack<number>([1, 2, 3]);
const queue = new Queue<number>([1, 2, 3]);

console.log(queue);
console.log(stack);