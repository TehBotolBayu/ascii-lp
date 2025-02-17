let matkulData = [
    {
      name: "Algoritma Pemrograman Lanjut",
      img: "assets/img/matkul/alrpo.jpg",
      link: "1kW918CinuP2ww_xzxtRWjSUnirc3wpYx"
    },
    {
      name: "Rekayasa Perangkat Lunak",
      img: "assets/img/matkul/iot.jpg",
      link: "111-CnedCj78em48NabnyTyGfrqtMEKNN"
    },
    {
      name: "Pemrograman Berbasis Objek",
      img: "assets/img/matkul/pbo.webp",
      link: "1L_6k4QHsdc_BtR_NUBK17QacDh-kOAZ5"
    },
    {
      name: "Jaringan Komputer",
      img: "assets/img/matkul/jarkom.jpg",
      link: "1kdWRVBpttejktW4EwvamQ-QXEKI4XSUs"
    },
    {
      name: "Sistem Operasi",
      img: "assets/img/matkul/operating-systems.jpg",
      link: "1s5AVPAqT0jEejLmNAtWdZRQlbG5uVBFU"
    },
    {
        name: "Multimedia",
        img: "assets/img/matkul/mulmed.jpg",
        link: ""
    },
    {
      name: "VR AR",
      img: "assets/img/matkul/vrar.jpg",
      link: "1STrtIObt41eLWCBivYXWrYfh90RE3VyS"
    },
    {
      name: "Internet Of Things",
      img: "assets/img/matkul/iot.jpg",
      link: "1r6gjueN0lHiLbvyoegk_2VI-2OyBE2rX"
    },
    {
        name: "Pemrograman Visual",
        img: "assets/img/matkul/pemvis.webp",
        link: "1_zjHNXtz-3O1XhEsidinU4nLu_9yxyBE"
    },
    {
      name: "Teknologi Pengembangan Game",
      img: "assets/img/matkul/tpg.png",
      link: "1_SIUmqrMk-zDlHFXZf2f0cIfKIuQyrgu"
    },
    {
      name: "Basis Data",
      img: "assets/img/matkul/basdat.png",
      link: "1PScJ41YVA6jfaC3VbvxLJyYN6ZHSWdRe"
    },
    {
      name: "Pemrograman Web",
      img: "assets/img/matkul/webdev.jpg",
      link: "1A0WtEKHex61DewzKR7_knlYIFzbYg1Jm"
    },
    {
      name: "Struktur Data",
      img: "assets/img/matkul/strukdat.jpg",
      link: "1zo7d6RK2PUSYJRC7dP0d5ERC0SMPrpmu"
    },
    {
      name: "Pemrograman Mobile",
      img: "assets/img/matkul/mobile.jpg",
      link: "1MdCk7UOXzOc4SdRFnOQ66DF4CbwQCt2b"
    },
    {
      name: "Algoritma Pemrograman Dasar",
      img: "assets/img/matkul/apd.jpg",
      link: "1WI_P45k6_qP72sn1hh6r8TlRN3uq2BAY"
    },
    {
      name: "Kecerdasan Buatan",
      img: "assets/img/matkul/kb.avif",
      link: "1BtT74m5btBoYZBnWrY-19f97GvhzCdaj"
    }
  ];


function createMatkulElement(matkulInfo) {
    // Create the main container div with id
    const matkulContainerId = document.getElementById("matkul-container-id");
    // Create the inner row div with class
    const matkulContainer = document.createElement('div');
    matkulContainer.classList.add('col-md-6', 'col-lg-3', 'matkul-container'); // Add both classes at once
    
    // Create the background div with class
    const matkulBg = document.createElement('div');
    matkulBg.classList.add('matkul-bg');
    matkulBg.style.setProperty("background-image", "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('"+matkulInfo.img+"')");
    // Create the h1 element
    const h1 = document.createElement('h1');
    h1.textContent = matkulInfo.name; // Set the text content
    // Create the line div
    const line = document.createElement('div');
    line.classList.add('line');
    // Append the elements in the correct order
    h1.appendChild(line); // Add the line to the h1
    matkulBg.appendChild(h1); // Add the h1 to the background div
    matkulContainer.appendChild(matkulBg); // Add the background div to the inner row
    matkulContainerId.appendChild(matkulContainer); // Add the inner row to the main container
    // Return the created element (so you can add it to the page)
    matkulContainer.addEventListener('click',() => {
        window.location.href = '/modul-docs.html?modul='+matkulInfo.link+'&name='+matkulInfo.name;
    })
    return matkulContainerId;
}

matkulData.forEach((element) => {
    createMatkulElement(element);
});