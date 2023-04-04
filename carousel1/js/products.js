//var list = 'https://raizensoft.com/test/web-app/products/list.json';

var thumbUrl = 'https://raizensoft.com/test/web-app/products/thumbs';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function listProduct(result) {

  shuffleArray(result.products);
  var p = result.products;
  var c = document.querySelector('.container.products');
  var title = document.createElement('h3');
  title.innerHTML = 'Javascript with admin backend';
  c.appendChild(title);
  var count = 0;
  var row = document.createElement('div');
  row.className = 'row';
  c.appendChild(row);

  // Update price
  let productName = '3D Carousel Stack Gallery';
  var productPrice;

  for (var i = 0; i < p.length; i++) {
    if (p[i].name === productName) {
      productPrice = p[i].price;
    }
    if (i  % 4 == 0) {
      row = document.createElement('div');
      row.className = 'row';
      c.appendChild(row);
    }
    var col = document.createElement('div');
    col.className = 'col';
    var a = document.createElement('a');
    col.appendChild(a);
    a.href = p[i].link;
    a.target = '_blank';
    var img = document.createElement('img');
    img.src = thumbUrl + '/' + p[i].thumbnail;
    a.appendChild(img);
    var sp = document.createElement('span');
    sp.innerHTML = p[i].name;
    col.appendChild(sp);
    row.appendChild(col);
  }

  if (window.isWpProduct) return;
  document.querySelector('.first-row').children[2].innerHTML = '$' + productPrice;
  document.querySelector('.last-row').children[2].innerHTML = '$' + productPrice;
  document.querySelector('.buynow-container .price').innerHTML = 'BUY NOW FOR ONLY $' + productPrice;
}

function listWpProduct(result) {

  window.isWpProduct = false;
  shuffleArray(result.products);
  var p = result.products;
  var c = document.querySelector('.container.products');
  var title = document.createElement('h3');
  title.innerHTML = 'WordPress Plugin';
  title.style.width = '180px';
  title.style.backgroundColor = '#00cdff';
  c.appendChild(title);
  var count = 0;
  var row = document.createElement('div');
  row.className = 'row';
  c.appendChild(row);

  // Update price
  let productName = '3D Carousel Stack Gallery';
  var productPrice;

  for (var i = 0; i < p.length; i++) {
    if (p[i].name === productName) {
      productPrice = p[i].price;
    }
    if (i  % 4 == 0) {
      row = document.createElement('div');
      row.className = 'row';
      c.appendChild(row);
    }
    var col = document.createElement('div');
    col.className = 'col';
    var a = document.createElement('a');
    col.appendChild(a);
    a.href = p[i].link;
    a.target = '_blank';
    var img = document.createElement('img');
    img.src = thumbUrl + '/' + p[i].thumbnail;
    a.appendChild(img);
    var sp = document.createElement('span');
    sp.innerHTML = p[i].name;
    col.appendChild(sp);
    row.appendChild(col);
  }

  document.querySelector('.first-row').children[2].innerHTML = '$' + productPrice;
  document.querySelector('.last-row').children[2].innerHTML = '$' + productPrice;
  document.querySelector('.buynow-container .price').innerHTML = 'BUY NOW FOR ONLY $' + productPrice;
}
