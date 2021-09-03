
// ig
let firstProp = (jsonObj) => {
  var firstProp;
  for(var key in jsonObj) {
      if(jsonObj.hasOwnProperty(key)) {
          firstProp = jsonObj[key];
          break;
      }
  }
  return firstProp;
};

let seeItem = (item, videos, images) => {

  let candidates = item.image_versions2.candidates;

  candidates.sort((a,b) => b.height - a.height);
  images.push(candidates[0].url);


  if(item.video_versions) {
    let vids = item.video_versions;
    vids.sort((a,b) => b.height - a.height);
    videos.push(vids[0].url);
  }

};



let seeReels = () => {
  let json =  document.getElementById('reels').value;
  let obj = JSON.parse(json);
  let items = firstProp(obj.reels).items;
  let videos = [];
  let images = [];
  items.forEach(i => seeItem(i, videos, images));

  let imgHtml = images.reverse().map(i => '<img src="' + i + '"/>').join();
  let vidHtml = videos.map(i => '<div style="width: max-content;"><a href="' + i + '" target="_blank" >' + i + '</a></div>').join();

  document.getElementById('result').innerHTML = vidHtml + imgHtml;

};



const html = '<input type="text" id="reels"/><input type="button" value="See" onclick="seeReels()"/><div id="result"></div>';
document.getElementsByTagName('body')[0].innerHTML=html;

