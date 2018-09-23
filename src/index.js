class Sorter {
  constructor() {
    this.store = [];
    this.mysort = function(a, b){return a - b};
    // your implementation
  }

  add(element) {
    this.store.push(element)
    // your implementation
  }

  at(index) {
    return this.store[index]
    // your implementation
  }

  get length() {
    return this.store.length;
    // your implementation
  }

  toArray() {
    return this.store;
    // your implementation
  }

  sort(indices) {
    let array = [];
    for (var i = 0; i < indices.length; i++) {
      let element = this.store[indices[i]];
      array.push(element); 
    }
    array.sort(this.mysort);
    indices.sort(function(a, b){return a - b});
    for (var i = 0; i < array.length; i++) {
      this.store[indices[i]] = array[i];
    }
    // your implementation
  }

  setComparator(compareFunction) {
    this.mysort = compareFunction;
    // your implementation
  }

  getComparator() {
    return this.mysort;
  }
}

module.exports = Sorter;