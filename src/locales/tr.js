export default {
  header: {
    darkModeOn: "AYDINLIK MOD",
    darkModeOff: "KARANLIK MOD",
    switchLang: "İNGİLİZCE'YE GEÇ",
    skills: "Yetenekler",
    projects: "Projeler",
    hireMe: "Beni işe al",
  },
  introduction: {
    name: "————Almila Su",
    title: "Yaratıcı düşünür\nMinimalizm hayranı",
    description: "Merhaba, ben Almila. Full-stack developer'ım. Güçlü ve ölçeklenebilir frontend ürünleri üretmek isteyenler için buradayım. El sıkışalım mı?",
    buttons: ["Beni işe al", "Github", "Linkedin"],
  },
  skills: {
    title: "Yetenekler",
    list: [
      {
        name: "JavaScript",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        name: "React.js",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        name: "Node.js",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      }
    ]
  },
  profile: {
    title: "Profil",
    fields: [
      { label: "Doğum Tarihi", value: "24.03.1996" },
      { label: "İkamet Şehri", value: "Ankara" },
      { label: "Eğitim Durumu", value: "Hacettepe Ünv. Biyoloji, 2016" },
      { label: "Tercih Ettiği Rol", value: "Frontend, UI" }
    ],
    aboutTitle: "Hakkımda",
    aboutParagraphs: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "Minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus."
    ]
  },
  projects: {
    title: "Projeler",
    list: [
      {
        id: 1,
        title: "Workintech",
        description:
          "Basit, özelleştirilebilir, minimal bir kurulumla çalışan bir çerez (cookie) eklentisi. Kullanıcılarınızın hangi çerezleri kabul edip etmeyeceklerini seçmelerine olanak tanır. Bu eklenti vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur. NPM paketi olarak mevcuttur ve git deposu sayesinde koda ve temalara her türlü özelleştirme yapılabilmesi mümkündür.",
        tags: ["react", "redux", "axios"],
        image: "/public/assets/workintech.png",
      },
      {
        id: 2,
        title: "Rastgele Şakalar",
        description:
          "Basit, özelleştirilebilir, minimal bir kurulumla çalışan bir çerez (cookie) eklentisi. Kullanıcılarınızın hangi çerezleri kabul edip etmeyeceklerini seçmelerine olanak tanır. Bu eklenti vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur. NPM paketi olarak mevcuttur ve git deposu sayesinde koda ve temalara her türlü özelleştirme yapılabilmesi mümkündür.",
        tags: ["react", "redux", "axios"],
        image: "/public/assets/random-jokes.png",
      },
      {
        id: 3,
        title: "Yolculuk",
        description:
          "Basit, özelleştirilebilir, minimal bir kurulumla çalışan bir çerez (cookie) eklentisi. Kullanıcılarınızın hangi çerezleri kabul edip etmeyeceklerini seçmelerine olanak tanır. Bu eklenti vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur. NPM paketi olarak mevcuttur ve git deposu sayesinde koda ve temalara her türlü özelleştirme yapılabilmesi mümkündür.",
        tags: ["react", "redux", "axios"],
        image: "/public/assets/journey.png",
      }
    ]
  },
  footer: {
    title: "Sonraki ürününüz için\nbirlikte çalışalım.",
    email: "almilasucode@gmail.com",
    links: ["Kişisel Blog", "Github", "Linkedin"]
  }
};