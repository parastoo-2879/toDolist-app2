// Main Part (To do list)
let input
let notetext
let txt = document.getElementsByClassName("txt")[0]
let note = document.getElementsByClassName('note')[0]

// click add button

document.getElementById("add").addEventListener("click", () => {
  note.style.height = "400px"
})

document.getElementById("check").addEventListener("click", () => {
  input = document.getElementsByClassName("title")[0].value
  notetext = document.getElementsByClassName("note-text")[0].value
  // console.log(input)
  // console.log(input.length)
  if (input != null && input != "" && input.length != 0) {
    let paper = document.createElement("section")
    paper.classList.add("paper")
    paper.innerHTML = `
<h2>${input}</h2>
<p>${notetext}</p>
<div class = "btn">
<i class="bi bi-trash" id="omit"></i>
<i class="bi bi-check-circle" id = "done"></i>
<i class="bi bi-pencil" id="edit"></i>
</div>
`
    txt.appendChild(paper)
    // note.remove()
    removeNote()

  }

  // console.log(document.querySelectorAll(".txt>.paper").length)

  let _child = document.querySelectorAll(".txt>.paper")
  _child.forEach((item, index) => {

    // remove task

    item.querySelector("#omit").addEventListener("click", () => {
      // alert("are u sure?")
      _child[index].remove()
      console.log(document.querySelectorAll(".txt>.paper").length)
    })

    // task is done

    item.querySelector("#done").addEventListener("click", () => {
      _child[index].querySelector("p").style.textDecoration = "line-through"
      _child[index].querySelector("h2").style.textDecoration = "line-through"
    })

    // edit task 

    let h2val = _child[index].querySelector("h2").innerText
    let pval = _child[index].querySelector("p").innerText
    item.querySelector("#edit").addEventListener("click", () => {
      _child[index].querySelector("h2").innerHTML = "<input value = " + h2val + "> <i class='edited'> ✔</i>"
      _child[index].querySelector("p").innerHTML = "<textarea>" + pval + "</textarea>"
      document.getElementsByClassName("edited")[0].addEventListener("click", () => {
        _child[index].querySelector("h2").innerHTML = _child[index].querySelector("input").value
        _child[index].querySelector("p").innerHTML = _child[index].querySelector("textarea").value
      })
    })
  });
})
// close popup 
document.getElementById("x").addEventListener("click", () => {
  removeNote()
})


function removeNote() {
  // console.log(input, notetext)
  // console.log(x, y)
  // x = ""
  // y = ""
  // چرا وقتی اینجا اینپوت رو صفر میکنم بازم مقدار قبل رو ذخیره داره با وجود اینکه گلوبال 
  // تعریف شده ؟
  // چون توقع بیجا داری! معلومه نمیشه ، تو متغیری که حاوی مقدار اینپوت هست رو صفر میکنی نه خوده اینپوت رو که 
  // input = ""
  // console.log(input)
  document.getElementsByClassName("title")[0].value = ""
  document.getElementsByClassName("note-text")[0].value = ""
  note.style.height = 0
}




// Reminder

document.getElementById("reminder").addEventListener("click", () => {
  document.getElementsByClassName("reminder")[0].style.height = "200px"
  document.getElementsByClassName("reminder")[0].style.padding = "15px"
})

document.getElementById("set").addEventListener("click", () => {
  let title = document.getElementById("title").value
  let hours = document.getElementById("hours").value
  let min = document.getElementById("min").value
  if (title != null) {
    let li = document.createElement("li")
    li.classList.add("remind")
    li.innerHTML = `
    <i class="bi bi-alarm"></i>
<h6>${title}</h6>
<span>${hours}:${min}</span>

`
    document.querySelector(".menu>ul").appendChild(li)
  }

  _clear()

  // alarm



  // setInterval(() => {
  //   console.log(time.getHours(), "--", time.getMinutes())

  // }, 100);
  // setInterval(_check(hours, min), 100)
  _check(hours, min)
})

// check time 



// function _check(x, y) {
//   // console.log(x, y)
//   let time = new Date()
//   h = time.getHours()
//   m = time.getMinutes()
//   console.log(h, ":", m)
//   if (h == x && m == y) {
//     alert("it's time")
//     // console.log(x, y)
//     document.getElementById("alarm").play()
//   } else {

//     _check(x, y)
//   }
// }
function _check(x, y) {
  let time = new Date()
  h = time.getHours() //12
  m = time.getMinutes() //00
  console.log(h, m)
  let diffh = 0
  let diffm = 0
  if (h == x && m == y) {
    // alert("it's time")
    document.getElementById("alarm").play()
  } else {
    if (x == h && y > m) {
      diffm = y - m
      console.log(x, "__", y, "__", diffm)
      _remind(diffh, diffm)
    } else if (x > h && y == m) {
      diffh = x - h
      console.log(x, "__", y, "__", diffh)
      _remind(diffh, diffm)
    } else if (x > h && y < m) {
      diffh = x - h
      diffm = m - y
      diffm = (diffh * 60) - diffm
      console.log(x, "__", y, "__", diffm)
      _remind(diffh, diffm)
    } else if (h > x && (m == y || m > y || y > m)) {
      alert("it's late")
    } else {
      alert("it's late")
    }
  }

  function _remind(diffh, diffm) {
    setTimeout(() => {
      _check(x, y)
    }, (diffh * 60 + diffm * 60 - time.getSeconds()) * 1000);
  }
}


// function _check(x, y) {
//   let time = new Date()

//   setInterval(() => {
//     if (time.getHours() == x && time.getMinutes() == y) {
//       alert("hey")
//     } else {
//       _check()
//     }
//   }, 100);
// }





document.getElementById("close").addEventListener("click", () => {
  _clear()
  document.getElementsByClassName("reminder")[0].style.height = "0px"
  document.getElementsByClassName("reminder")[0].style.padding = "0px"
})

function _clear() {
  document.getElementById("title").value = ""
  document.getElementById("hours").value = ""
  document.getElementById("min").value = ""
}



// Setting
// Accordion Menu
let _flag = 1
document.getElementsByClassName("select")[0].addEventListener("click", () => {
  if (_flag % 2) {
    document.getElementsByClassName("darkmode")[0].style.height = "80px"
  } else {
    document.getElementsByClassName("darkmode")[0].style.height = "0px"
  }
  _flag++
})


// DarkMode

let flag = 1
document.getElementsByClassName("darkmode")[0].addEventListener("click", () => {
  if (flag % 2) {
    document.getElementsByClassName("_menu")[0].style.background = "#383636"
    document.getElementsByTagName("html")[0].style.color = "white"
    txt.style.backgroundImage = "url(img/dark2.png)"
    document.getElementById("dbtn").classList.toggle("dark")
  } else {
    document.getElementsByClassName("_menu")[0].style.background = "#e5e5e5"
    document.getElementsByTagName("html")[0].style.color = "black"
    txt.style.backgroundImage = "url(img/paper.jpg)"
    document.getElementById("dbtn").classList.toggle("dark")
  }
  flag++
})