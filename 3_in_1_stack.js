// Array of arrays with limited size

// Add items to first array until 
//   capacity is reached

// Move to next array and repeat

// If pop from index[0] or from any 
// other index don't worry about
// capacity not being used
const stackCapacity = 5

class MultiStack {
  constructor(stackCapacity) {
  // find stack capacity - length of array/3  15/3 = 5 - index if .length 
  this._stackCapacity = stackCapacity; // 5
  // number of stacks  3
  this.numOfStacks = 3  // 0, 1, 2
  // array of the values - which is everything 0-4 stack
  this.values = [];  // if it's full ifFull boolean
  // index of top - how many are in it 
  this.sizes = [0, 0, 0]
  // & if is full is true or not
  }  
  get stackCapacity() {
    return this._stackCapacity;
  }
  indexOfTop(stackNo) { 
    const indexOfBottom = stackNo * this.stackCapacity
    const size = this.sizes[stackNo]
    return size + indexOfBottom
   }

  isFull(stackNo) {
    if (this.sizes[stackNo] === this.stackCapacity) {
      return true
    } else {
      return false
    }
  }
  // peek push and pop functionality
  peek(stackNo) {
    return this.values[this.indexOfTop(stackNo)]
  }
  push(stackNo, value) {          // stackNo = 0, value = 4
    if (this.isFull(stackNo)) {
      console.log(`Stack ${stackNo} is full`)
      return
    }
    this.sizes[stackNo]++
    return this.values.splice(this.indexOfTop(stackNo), 0, value)

  }
  pop(stackNo) {
    if (this.sizes[stackNo] === 0) {
      console.log(`Stack ${stackNo} is empty`)
      return
    }
    return this.values.splice(this.indexOfTop(stackNo), 1)
  }
};

let stack = new MultiStack(5);

console.log(stack.stackCapacity); // 5
console.log(stack.indexOfTop(0));
console.log(stack.values);
stack.push(0, 4); // "Item 4 has been successfully added to stack 0"
console.log(stack.indexOfTop(0));
console.log(stack.values);
stack.push(0, 3); // "Item 3 has been successfully added to stack 0"
console.log(stack.indexOfTop(0));
console.log(stack.values);
stack.push(0, 2); // ...
console.log(stack.indexOfTop(0));
console.log(stack.values);
stack.push(0, 1);
console.log(stack.indexOfTop(0));
console.log(stack.values);
stack.push(1, 8);
stack.push(1, 7);
stack.push(1, 6);
stack.push(1, 5);
stack.push(2, 12);
stack.push(2, 11);
stack.push(2, 10);
stack.push(2, 9); // "Item 9 has been successfully added to stack 2"// console.log(stack);
console.log(stack.peek(0)); // 1
console.log(stack.peek(1)); // 5
console.log(stack.peek(2)); // 9
console.log(stack.push(0, 16));
console.log(stack.peek(0)); // 16
console.log(stack.isFull(0)); // true
console.log(stack.push(0, 55)); // "Stack number 0 is full"
console.log(stack.pop(0)); // 16
console.log(stack.isFull(0)); // false
console.log(stack);