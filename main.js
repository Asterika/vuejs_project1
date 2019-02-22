//this creates a new Vue instance
//pass options object into it to store data/perform actions
var app = new Vue({
  //create an element that connects to div with id of app in index.html
  el: '#app',
  data: {
    brand: 'Vue Mastery',
    product: 'Socks',
    image:'./assets/vmSocks-green-onWhite.jpg',
    link: 'https://greensock.com/',
    inventory: 8,
    inStock: false,
    onSale: false,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: './assets/vmSocks-green-onWhite.jpg'
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: './assets/vmSocks-blue.png'
      }
    ],
    cart: 0
  },
  // "this.cart" references cart above in data
  methods: {
    addToCart: function () {
      this.cart += 1
    },
    updateProduct: function (variantImage) {
      this.image = variantImage
    },
    removeFromCart: function () {
      // if (cart >= -1) {
        this.cart -= 1
      // } else {
      //
      // }
    }
    // cartPopulated: function () {
    //   this.cart >= 1
    // }
    // can use updated ES6 syntax but not all browsers support:
    // updateProduct(variantImage)
    // sizes: ["x-small", "small", "medium", "large", "x-large", "2XL", "3XL"]
  }
})
