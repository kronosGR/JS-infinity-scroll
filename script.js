
const count = 5;
const apiKey ='CslSgwVDHLxm_ZkEmQHJCSPDbKIX_2QLk9XFQVLxYBQ';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

async function getPhotos(){
  try{
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch(error){

  }
}

getPhotos();