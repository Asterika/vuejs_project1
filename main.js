//this creates a new Vue instance
//pass options object into it to store data/perform actions
var app = new Vue({
  //create an element that connects to div with id of app in index.html
  el: '#app',
  data: {
    product: 'Socks',
    image:'./assets/vmSocks-green-onWhite.jpg',
    link: 'https://greensock.com/'
  }
})
