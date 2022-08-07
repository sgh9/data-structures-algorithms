
const swap = (a, b, arr)=> {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

const bubbleSort = (arr )=> {
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i; j++) {
            if(arr[j] > arr[j+1]) {
                swap(j, j + 1, arr);
            }
        }
    }
    return arr;
}
 
const bubbleSort2 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <i; j++) {
            if(arr[i] < arr[j]) {
                swap(i, j , arr);
                console.log(arr[i]);
            }
        }
    }
    return arr;
}

const selectionSort = (arr )=> {
    for(let i = 0; i < arr.length; i++) {
        let min = i;
       for(let j = i; j < arr.length; j++) {
        if(arr[j] < arr[min]) {
            min = j;
        }
       } 
       swap(i, min, arr);
    }
    return arr;
}

const insertionSort = (arr )=> {
    for(let i = 1; i< arr.length; i++) {
        //first element in unsorted array 
        let current = arr[i]; // 4
        //j first element in sorted array
        let j = i - 1;  // 3
        while(j >= 0 && arr[j] > current ) {//
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

const merge = (arr1, arr2)=> {
    let i = 0;
    let j = 0;
    const finalArr = [];

    while(i< arr1.length && j < arr2.length ) {
        if (arr1[i] > arr2[j]) {
            finalArr.push(arr2[j]);
            j++;
        } else {
            finalArr.push(arr1[i]);
            i++;
        }
    }
     return finalArr.concat(arr1.slice(i)).concat(arr2.slice(j));
}

const mergSort = (arr) => {
    if(arr.length < 2) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let firstArr = arr.slice(0, mid);
    let secondArr = arr.slice(mid, arr.length);

    return merge(mergSort(firstArr), mergSort(secondArr));
}

const heapSort = (arr)=> {

}

let myArr = [3, 4, 23, 43, 2, 67, 5, 6];
let result;


// result = bubbleSort2(myArr);
// result = bubbleSort2(myArr);
//result = selectionSort(myArr);
 
//result = insertionSort(myArr);
result = mergSort(myArr);

console.log(result);
let builtIn = myArr.sort((a, b)=> a - b);

builtIn





 

