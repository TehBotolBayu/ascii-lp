function createBookItem(data) {
    const date = new Date(data.createdTime);
    

    const bookItem = document.createElement('div');
    bookItem.className = 'book-item row d-flex justify-content-center';
  
    const bookCover = document.createElement('img');
    bookCover.className = 'book-cover col-1';
    bookCover.alt = 'cover';
    bookCover.src = data.thumbnailLink; // Corrected path
    bookItem.appendChild(bookCover);
  
    const bookDesc = document.createElement('div');
    bookDesc.className = 'book-desc col-lg-8 col-md-7 col-10';
  
    const bookYear = document.createElement('h6');
    bookYear.className = 'book-year';
    bookYear.textContent = '2024';
    bookDesc.appendChild(bookYear);
  
    const bookTitle = document.createElement('h1');
    bookTitle.className = 'book-title';
    bookTitle.textContent = data.name.replace('.pdf', '');
  
    const line = document.createElement('div');
    line.className = 'line';
    bookTitle.appendChild(line);
    bookDesc.appendChild(bookTitle);

  
    bookItem.appendChild(bookDesc);
  
    const bookDownload = document.createElement('div');
    bookDownload.className = 'book-download col-1';
  
    const downloadIcon = document.createElement('i');
    downloadIcon.className = 'bi bi-cloud-arrow-down download';
    downloadIcon.style.fontSize = '2rem';
    bookDownload.appendChild(downloadIcon);
  
    bookItem.appendChild(bookDownload);

    bookItem.addEventListener('click', () =>{
        window.location.href = data.webViewLink;
    })
  
    return bookItem; // Return the created element
  }

async function fetchModul(){
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const param = params.get('modul');
    const nameModul = params.get('name');

    document.getElementById('judul-modul')
        .textContent = nameModul;

    const resposeData = await fetch('http://localhost:5000/api/modul/'+param);
    if(resposeData.ok){
        const booksData = await resposeData.json();
        const sortedBooksData = booksData.sort((a, b) => a.name.localeCompare(b.name));
        let bookShelf = document.getElementById("books-container");
        sortedBooksData.map(data => {
            let bookItem = createBookItem(data);
            bookShelf.appendChild(bookItem);
        })
    }else{
        console.log("daata error");
    }
}


fetchModul();