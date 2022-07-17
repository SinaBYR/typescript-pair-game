// Extending Array: Adding Fisher–Yates Shuffle Algorithm

// add shuffle method to "Array<T>" interface
interface Array<T> {
  shuffle(): Array<T>
}

// shuffle method body
Array.prototype.shuffle = function() {
  let currentIndex = this.length, randomIndex: number, temp: any;

  while(currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temp = this[currentIndex];
      this[currentIndex] = this[randomIndex];
      this[randomIndex] = temp;
  }

  return this;
}