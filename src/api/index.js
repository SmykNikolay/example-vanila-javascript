const BACKEND_URL = `${process.env.BACKEND_URL}api/`;

export default class ClientBuilder {
  constructor(url = "") {
    this.url = new URL(url, BACKEND_URL);
    console.log("ClientBuilder", this.url);
  }

  toString() {
    return this.url.toString();
  }
  addPagination(start, end) {
    this.url.searchParams.set("_start", start);
    this.url.searchParams.set("_end", end);

    return this;
  }

  addSort(sort, order) {
    this.url.searchParams.set("_sort", sort);
    this.url.searchParams.set("_order", order);

    return this;
  }

  addFilter(price_lte, price_gte) {
    this.url.searchParams.set("price_lte", price_lte);
    this.url.searchParams.set("price_gte", price_gte);

    return this;
  }

  addSearch(title_like) {
    this.url.searchParams.set("title_like", title_like);

    return this;
  }

  resetSearchParams() {
    const keys = [...this.url.searchParams.keys()];

    for (const key of keys) {
      this.url.searchParams.delete(key);
    }

    return this;
  }
}
