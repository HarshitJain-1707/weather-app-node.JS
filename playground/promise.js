var asyncAdd=(a,b)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(typeof a==='number' && typeof b==='number'){
        resolve(a+b);
      }
      else{
        reject('Arguments must be numbers.');
      }
    },1500)
  });
}

asyncAdd(4,'a').then((res)=>{
  console.log('Success:',res);
  return asyncAdd(res,35);
},
  (errorMessage)=>{
    console.log('Failed:',errorMessage);
  }
)//.then((res)=>{
//    console.log('Results:',res);
// }, (errorMessage)=>{
//     console.log('Failed:',errorMessage);
//});
.catch((errorMessage)=>{
  console.log(errorMessage);
});














//
// var somepromise=new Promise((resolve,reject)=>{
//
//    setTimeout(()=>{
//      // resolve('Hey it worked.');
//      reject('Hey it is not working.');
//    },2500);
// });
//
// somepromise.then((message)=>{
//   console.log('Success:',message);
// },
//   (errorMessage)=>{
//     console.log('Failed:',errorMessage);
//   }
// );
