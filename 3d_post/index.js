let feedUrl = 'lazada_30_38.xml';
let jsonData = null;
let onComplete = null;

function initParseCsv(oncompleteParse) {
  onComplete = oncompleteParse;
  getCSV();
}

function getCSV(oncompleteParse) {
  xmlHttp_ = new XMLHttpRequest();
  xmlHttp_.addEventListener('readystatechange', onReadyStateChanged_);
  xmlHttp_.open('GET', feedUrl);
  xmlHttp_.send();
}

function onReadyStateChanged_() {
  if (xmlHttp_.readyState === 4) {
    if (xmlHttp_.status === 200) {
      jsonData = xmlHttp_.responseText;

      Papa.parse(jsonData, {
        header: true,
        dynamicTyping: true,
        complete: onCSVRead
      });
    } else {
      console.error('Error requesting feed.', xmlHttp_.status);
    }
  }
}

function onCSVRead(results) {
  let data = results.data;

  for (let i = 0; i < data.length; i++) {
    let clonedArray = JSON.parse(JSON.stringify(innityAppsCloneItem));
    let clonedIndex = i+1;
    let clicktagIndex = i === 0 ? '' : i;

    clonedArray.id = `page-${clonedIndex}`;
    clonedArray.attrs['data-time-track'] = `frame${clonedIndex}`;
    clonedArray.attrs['data-clicktag'] = `clickTAG${clicktagIndex}`;

    clonedArray.childs[0].attrs.src = data[i].picture_url;
    clonedArray.childs[1].childs[1].childs[0].childs[0].innerHTML = data[i].product_name;
    clonedArray.childs[1].childs[1].childs[1].childs[0].innerHTML = 'RM' + data[i].discounted_price;

    innityAppsMaterials[0].childs[0].childs[i] = clonedArray;
  }

//  printXML(data);
//  printClickTag(data);
//  printTrack(data);

  onComplete();
}

function printXML(data) {
  let output = '';
  for (let i = 0; i < data.length; i++) {
    let url = data[i].promo_link_combined;
    output += `<Clicktag><![CDATA[${url}]]></Clicktag>`;
  }

  console.log(output);
}

function printClickTag(data) {
  let output = '';
  for (let i = 0; i < data.length; i++) {
    let url = data[i].promo_link_combined;
    let index = i === 0 ? '' : i;
    output += `clickTAG${index}: "${url}",`;
  }

  console.log(output);
}

function printTrack(data) {
  let output = '';
  for (let i = 0; i < data.length; i++) {
    let frameIndex = i + 1;
    output += `<Event name="frame${frameIndex}"><![CDATA[Total Views on Frame ${frameIndex}]]></Event>`;
  }

  console.log(output);
}
