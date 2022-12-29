function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

function Display() {

}

Display.prototype.add = function (book) {
    let tablebody = document.getElementById('tablebody');
    let uistring = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;

    tablebody.innerHTML += uistring;
}

Display.prototype.clear = function () {
    let libraryform = document.getElementById('libraryform');
    libraryform.reset();

}

Display.prototype.validate = function (book) {
    if(book.name.length<2 || book.author.length<2){
        return false;
    }
    else{
        return true;
    }

}

Display.prototype.show = function (type,displaymessage) {
    let message = document.getElementById('message');
    let boldtext;
    if(type === 'success'){
        boldtext = 'success'
    }
    else{
        boldtext = 'error'
    }
    message.innerHTML = ` <div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>${boldtext}</strong> ${displaymessage}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;

  setTimeout(function() {
    message.innerHTML = '';
  }, 2000);

}




let libraryform = document.getElementById('libraryform');
libraryform.addEventListener('submit', submitform);

function submitform(e) {
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cocking = document.getElementById('cocking');
    let type;

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cocking.checked) {
        type = cocking.value;
    }

    let book = new Book(name, author, type);
 
    console.log(book);

    let display = new Display();

    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success','book is successfully added');
    }
    else{
        display.show('danger','please check all fields again');
    }
   

    e.preventDefault();

}