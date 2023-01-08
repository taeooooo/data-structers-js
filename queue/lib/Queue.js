export default function Queue() {
  this.data = [];

  this.enqueue = (element) => {
    this.data.push(element);
  };

  this.dequeue = () => {
    return this.data.shift();
  };

  this.front = () => {
    return this.data[0];
  };

  this.back = () => {
    return this.data[this.data.length - 1];
  };

  this.empty = () => {
    if (this.data.length == 0) {
      return true;
    } else {
      return false;
    }
  };
}
