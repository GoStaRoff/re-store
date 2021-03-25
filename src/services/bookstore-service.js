export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "Naruto S1",
      author: "Masasi Kisimoto",
      price: 35,
      image:
        "https://naruto-shippudenmanga.com/wp-content/uploads/2020/07/naruto.jpg",
    },
    {
      id: 2,
      title: "Naruto S2",
      author: "Masasi Kisimoto",
      price: 35,
      image:
        "https://naruto-shippudenmanga.com/wp-content/uploads/2020/07/naruto-manga.jpg",
    },
    {
      id: 3,
      title: "Naruto S3",
      author: "Masasi Kisimoto",
      price: 35,
      image:
        "https://naruto-shippudenmanga.com/wp-content/uploads/2020/07/naruto.jpg",
    },
    {
      id: 4,
      title: "Naruto S4",
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
