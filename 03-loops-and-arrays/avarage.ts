let numArr : number[] = [1,2,3,4,5];

let total=0;
for (let num of numArr) {

    total+=num;
    
}
console.log(`avarage is: ${total/numArr.length}`);