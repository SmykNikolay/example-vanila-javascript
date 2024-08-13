export const navigationConfig = [
  {
    url: "/",
    html: `<i class="bi bi-shop"></i><span>Products</span>`,
    attributes: {
      class: "link-unstyled",
    },
  },
  {
    url: "/wishlist",
    html: `<i class="bi bi-star"></i>Wishlist <span data-element="wishlistCounter">0</span>`,
    attributes: {
      class: "link-unstyled",
    },
  },
  {
    url: "/cart",
    html: `<i class="bi bi-cart"></i>Cart <span data-element="cartCounter">0</span>`,
    attributes: {
      class: "link-unstyled",
    },
  },
];
