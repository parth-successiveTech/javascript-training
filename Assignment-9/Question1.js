import _ from 'lodash';

let obj={
    a: "parth",
    b: "akhil",
    c:[1,{b:[1,2]},3,4]
}
let deepCopy= _.cloneDeep(obj);
console.log(deepCopy);

deepCopy.a="qrahul";
console.log(deepCopy);