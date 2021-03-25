export default class BookstoreService {
  data = [
    {
      id: 1,
      tittle: "Naruto S1",
      author: "Masasi Kisimoto",
      price: 35,
      image:
        "https://naruto-shippudenmanga.com/wp-content/uploads/2020/07/naruto.jpg",
    },
    {
      id: 2,
      tittle: "Naruto S2",
      author: "Masasi Kisimoto",
      price: 35,
      image:
        "https://naruto-shippudenmanga.com/wp-content/uploads/2020/07/naruto-manga.jpg",
    },
    {
      id: 3,
      tittle: "Naruto S3",
      author: "Masasi Kisimoto",
      price: 35,
      image:
        "https://naruto-shippudenmanga.com/wp-content/uploads/2020/07/naruto.jpg",
    },
    {
      id: 4,
      tittle: "Naruto S4",
      author: "Masasi Kisimoto",
      price: 35,
      image:
        "https://naruto-shippudenmanga.com/wp-content/uploads/2020/07/naruto-manga.jpg",
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error("smth going wrong"));
        }
        resolve(this.data);
      }, 700);
    });
  }
}
