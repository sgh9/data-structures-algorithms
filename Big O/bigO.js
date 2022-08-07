const nemo = ["namo", "b", "n", "f", "ff"];
const everything = Array(20000000).fill("nemo") ;

// O(n) ---> Linear Time
function findNemo(arr) {
    for(let i = 0; i< nemo.length; i++) {
        if(nemo[i] === "namo") {
            console.log("Found Nemo");
        }
    }
}

// findNemo(nemo);
findNemo(everything);