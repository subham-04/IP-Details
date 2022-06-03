function json(url) {
    return fetch(url).then(res => res.json());
  }
  
  let apiKey = '8ba7b6325a6f3d68340008d34ef93cd783968ec19d53a6ae3a7a48d7';
  json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
    console.log(data.ip);
    console.log(data.city);
    console.log(data.latitude);
    console.log(data.longitude);    
    console.log(data.flag);
    console.log(data.postal);
    console.log(data.country_name);
    console.log(data.continent_name);
    console.log(data.calling_code);


    // so many more properties
  });