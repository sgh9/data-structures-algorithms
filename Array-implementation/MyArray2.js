class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    if (this.length === 0) return undefined;
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shift() {
    if (this.length === 0) return undefined;
    const firstItem = this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  unshift(...items) {
    // Shift existing elements to make room
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + items.length] = this.data[i];
    }

    // Insert new items at the beginning
    for (let i = 0; i < items.length; i++) {
      this.data[i] = items[i];
    }

    this.length += items.length;
    return this.length;
  }

  delete(index) {
    const item = this.data[index];
    this._shiftItems(index);
    return item;
  }

  _shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  slice(start = 0, end = this.length) {
    const result = new MyArray();
    if (start < 0) start = this.length + start;
    if (end < 0) end = this.length + end;
    for (let i = start; i < end && i < this.length; i++) {
      result.push(this.data[i]);
    }
    return result;
  }

  splice(start, deleteCount = 0, ...items) {
    const removed = new MyArray();
    if (start < 0) start = this.length + start;
    if (start > this.length) start = this.length;

    for (let i = start; i < start + deleteCount && i < this.length; i++) {
      removed.push(this.data[i]);
    }

    const shiftCount = items.length - deleteCount;

    if (shiftCount > 0) {
      for (let i = this.length - 1; i >= start; i--) {
        this.data[i + shiftCount] = this.data[i];
      }
    } else if (shiftCount < 0) {
      for (let i = start + deleteCount; i < this.length; i++) {
        this.data[i + shiftCount] = this.data[i];
      }
      for (let i = this.length - 1; i >= this.length + shiftCount; i--) {
        delete this.data[i];
      }
    }

    for (let i = 0; i < items.length; i++) {
      this.data[start + i] = items[i];
    }

    this.length += shiftCount;
    return removed;
  }

  map(callback) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this.data[i], i, this));
    }
    return result;
  }

  filter(callback) {
    const result = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (callback(this.data[i], i, this)) {
        result.push(this.data[i]);
      }
    }
    return result;
  }

  reduce(callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;

    if (accumulator === undefined) {
      if (this.length === 0) throw new TypeError("Reduce of empty array with no initial value");
      accumulator = this.data[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this.data[i], i, this);
    }

    return accumulator;
  }

  find(callback) {
    for (let i = 0; i < this.length; i++) {
      if (callback(this.data[i], i, this)) {
        return this.data[i];
      }
    }
    return undefined;
  }
}
