export default function Stack() {
  this.data = [];
  this.top = 0;

  this.push = (d) => {
    this.top += 1;
    this.data.push(d);
  };

  this.pop = () => {
    this.top -= 1;
    return this.data.pop();
  };

  this.peek = () => {
    return this.data[this.top - 1];
  };
}
