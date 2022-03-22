
const  getProperties =(object) => {
  let keys = Object.keys(object);
  console.log(keys);
   
    
 }
 getProperties({ a: 1, b: true , c: 2})


 const isPlainObject=(obj)=>{

if (typeof obj =='object' && Array.isArray(obj) == false){
    return console.log ("true")
}
else return console.log("false")

 }
 isPlainObject({a: 1, b: true , c: 2})




 const theObject = { a: 1, c: "I don't know " };



const modifyObject = (a) => {

    let object = typeof a == 'object' && a.constructor == Object;
    if (!object) return "it's not an object"
    a['isObject'] = object;
    a['getPropertiesNb'] = Object.keys(a).length;
    return a
}

console.log(modifyObject(theObject));



const makePairs = (obj) => {

let  result = Object.entries(obj);
console.log (result)


}
makePairs({ a: 1, b: 2 })




const without = (obj, prop) =>{

   result = delete obj[prop]
   console.log(obj)

}

without( {firstname: 'John',
lastname: 'Doe'}, 'firstname')


const isEmpty = (y) =>{
    return Object.keys(y).length === 0 && y.constructor === Object && (y !== undefined) ;
    }
    console.log(isEmpty({}));
    console.log(isEmpty({a:undefined}));
    console.log(isEmpty({a:1}));
  


    const isEqual = (obj1,obj2) => {
        for(let key in obj1){
          if(!(key in obj2 )) return console.log('false');
          if(obj1[key]!==obj2[key])return console.log('false');
        }
        return console.log('true');
        }
        isEqual({foo: 'bar'},{foo: 'bar'})


        function intersection(a1,a2){
            return  a1.filter(function(n) { return a2.indexOf(n) !== -1;});
        }
        var colors1 = ["red","blue","green"];
        var colors2 = ["red","yellow","blue"];
        var Colors=intersection(colors1, colors2); //["red", "blue"]
        console.log(Colors);