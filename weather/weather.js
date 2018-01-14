const request=require('request');


var getWeather=(lat,lon,callback)=>{
  request({
    url:`https://api.darksky.net/forecast/80d6073da8c1d86d17a85f68b546e9ed/${lat},${lon}`,
    json:true
  },(error,response,body)=>{
    if(!error && response.statusCode===200){
      callback(undefined,{
        temperature:body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
    else {
     callback('Unable to fetch weather.');
   }
  });
}
module.exports={
  getWeather
};

// var geocodeAddress=(address,callback)=>{
//  var encodedAddress=encodeURIComponent(address);
//
// request({
// url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
// json:true
// },(error,response,body)=>{
// if(error){
//   callback('Unable to connect to google servers.');
// }
// else if(body.status==='ZERO_RESULTS'){
//   callback('Unable to find that address.');
// }
// else if(body.status==='OK'){
//   callback(undefined,{
//     address:body.results[0].formatted_address,
//     Latitude:body.results[0].geometry.location.lat,
//     Longitude:body.results[0].geometry.location.lng
//   });
// }
// });
// }
