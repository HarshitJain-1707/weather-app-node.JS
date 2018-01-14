
const yargs=require('yargs');
const axios=require('axios');

const argv=yargs
   .options({
     a:{
       default:'NIT RAIPUR',
       alias:'address',
       describe:'Address to  fetch weather for',
       string:true
     }
   })
   .help()
   .alias('help','h')
   .argv;

var encodedAddress=encodeURIComponent(argv.address);
var geocodeURL=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeURL).then((response)=>{
  if(response.data.status==='ZERO_RESULTS'){
    throw new Error('Unable to find that address.');
  }
  var lat=response.data.results[0].geometry.location.lat;
  var lon=response.data.results[0].geometry.location.lng;
  var weatherURL=`https://api.darksky.net/forecast/80d6073da8c1d86d17a85f68b546e9ed/${lat},${lon}`;
  console.log(response.data.results[0].formatted_address);
  axios.get(weatherURL).then((response)=>{
    var temperature=response.data.currently.temperature;
    var apparentTemperature=response.data.currently.apparentTemperature;
    console.log('Its currently ',temperature);
    console.log('It feels like',apparentTemperature);
  })
}).catch((e)=>{
  if(e.code==='ENOTFOUND'){
    console.log('Unable to connect to Server.');
  }else{
    console.log(e.message);
  }
});
