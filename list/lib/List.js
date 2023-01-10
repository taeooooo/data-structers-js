export default function List() {
  return {
    listSize: 0,
    pos: 0,
    data: [],
    toString() {
      return this.data;
    },
    length() {
      return this.listSize;
    },
    clear() {
      delete this.data;
      this.data = [];
      this.listSize = this.pos = 0;
    },
    find(element) {
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i] == element) {
          return i;
        }
      }
      return -1;
    },
    insert(element, after) {
      const insertPos = this.find(after);

      if (insertPos > -1) {
        this.data.splice(insertPos + 1, 0, element);
        this.listSize += 1;
        return true;
      }
      return false;
    },
    append(element) {
      this.data[this.listSize++] = element;
    },
    remove(element) {
      const foundAt = this.find(element);
      if (foundAt > -1) {
        this.data.splice(foundAt, 1);
        this.listSize -= 1;
        return true;
      }
      return false;
    },
    front() {
      this.pos = 0;
    },
    end() {
      this.pos = this.listSize - 1;
    },
    next() {
      if (this.pos < this.listSize - 1) {
        this.pos += 1;
      }
    },
    prev() {
      if (this.pos > 0) {
        this.pos -= 1;
      }
    },
    curPos() {
      return this.pos;
    },
    moveTo(position) {
      this.pos = position;
    },
    getElement() {
      return this.data[this.pos];
    },
    contains(element) {
      const foundAt = this.find(element);
      return foundAt > -1 ? true : false;
    },
  };
}
