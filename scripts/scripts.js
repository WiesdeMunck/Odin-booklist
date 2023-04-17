
const submitInput = document.getElementById("submit");

let AddNewbook = function() {
// gets html elemtns and inputs
const bookInput = document.getElementById("book").value;
const authorInput = document.getElementById("author").value;
const pagesInput = document.getElementById("pages").value;
const booklist = document.getElementById("bookList")

// The new object?
const book1 = new bookInfo(bookInput, authorInput, pagesInput)
const book2 = new bookInfo(bookInput, authorInput, pagesInput)

// Again new object ?
	const bookLoad = new bookInfo(bookInput, authorInput, pagesInput)

// logs the current info and adds it to the array called ibary
	libary.push(bookLoad) //add new items to array
	console.log(bookLoad)

// Creating the html elements for the books

const bookArticle = document.createElement("article")
const bookH3 = document.createElement("h3")
const bookUl = document.createElement("ul")
const bookLiAuthor = document.createElement("li")
const bookLiPages = document.createElement("li")

bookH3.innerHTML = bookInput
bookLiAuthor.innerHTML = authorInput
bookLiPages.innerHTML = pagesInput

booklist.append(bookArticle)
bookArticle.append(bookH3)
bookArticle.append(bookUl)
bookUl.append(bookLiAuthor)
bookUl.append(bookLiPages)
}

// Somehow this works, help me
submitInput.addEventListener('mousedown', () => {
	console.log("hello")
	AddNewbook()
})


