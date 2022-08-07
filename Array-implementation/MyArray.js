class MyArray {

	constructor() {
		this.data = {};
		this.length = 0;
	}

	pop() {
		delete this.data[this.length - 1];
		this.length--;
		return this.data[this.length - 1];
	}

	push(value) {
		this.length++;
		this.data[this.length - 1] = value;
		return this.data.length;
	}

	reOrderItems1(index) {
		let data = {};
		for (let i = index; i < this.length; i++) {
			data[i + 1] = this.data[i];
		}
		this.data = data;
	}

	reOrderItems2() {
		let data = {};
		for (let i = 0; i < this.length; i++) {
			data[i] = this.data[i + 1];
		}
		delete data[this.length - 1];
		this.data = data;
	}

	reOrderItems3(index, num, ...items) {
		let data = {};
		let i = 0;

		while (i < items.length) { 
			data[index + i] = items[i];
			i++;
		}

        for(let i = 0; i < index; i++) {
			data[i] = this.data[i];
        }
		
        for(let i = index ; i < this.length; i++) {
           data[items.length + i] = this.data[i + num];
        }

        delete this.data[index + items.length];
		this.data = data;
        this.length = items.length + this.length;
	}

	unshift(value) {
		this.reOrderItems1(0);
		this.data[0] = value;
		this.length++;
	}

	shift() {
		delete this.data[0];
		this.reOrderItems2();
		this.length--;
	}

	splice(index, num, ...items) {

			if(num === undefined) {
				num = this.length;
			}
			for(let i = index; i < index + num ; i++) {
				this.data[i] && this.length--;
				delete this.data[i];
			}

		this.reOrderItems3(index, num, ...items);
	}
}

const newArr = new MyArray();

const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let arrObj = {};
length = 0;

for(let key in arr) {
	arrObj[key] = arr[key];
	length++;
};

newArr.data = arrObj;
newArr.length = length;
const arr1 = [...arr];

// arr1.splice(2, 4, 'C', "k");
// arr1.unshift("2");
// newArr.splice(2, 4, 'C', "k");
// newArr.unshift("2");

arr1.splice(3, 2, "K");
newArr.splice(3, 2, "K");
 								arr1
console.log(Object.values(newArr.data));
newArr