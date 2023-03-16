// dropdown

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }

}


function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show1");
}

window.onclick = function (e) {
  if (!e.target.matches('.dropbtn1')) {
    var myDropdown1 = document.getElementById("myDropdown1");
    if (myDropdown1.classList.contains('show1')) {
      myDropdown1.classList.remove('show1');
    }
  }
}
$('dropdown-content').on('click', function (event) {

  event.stopPropagation();
});



// dropdown

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }

}


function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show1");
}

window.onclick = function (e) {
  if (!e.target.matches('.dropbtn1')) {
    var myDropdown1 = document.getElementById("myDropdown1");
    if (myDropdown1.classList.contains('show1')) {
      myDropdown1.classList.remove('show1');
    }
  }
}

$('dropdown-content').on('click', function (event) {

  event.stopPropagation();
});


// function myDiv() {
//   document.getElementById("btn").style.borderRadius = "80%";
// }


const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})






$('.icon').click(function () {
  $('span').toggleClass("cancel");
});




// basket

if (localStorage.getItem('basket') === null) {
  localStorage.setItem('basket', JSON.stringify([]))
}


let btns = document.getElementsByClassName('btn_add');


setTimeout(() => {
  for (let btn of btns) {
    btn.onclick = function (e) {
      let basket = JSON.parse(localStorage.getItem('basket'))
      let price = e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
      let title = e.target.parentElement.nextElementSibling.innerHTML;
      let id = e.target.parentElement.parentElement.id;
      let image = e.target.parentElement.previousElementSibling.previousElementSibling.src;

      let existProd = basket.find(prod => prod.ID == id);
      if (existProd == undefined) {
        basket.push({
          ID: id,
          Name: title,
          Price: price,
          Image: image,
          Count: 1
        })
      } else {
        existProd.Count += 1;
      }




      localStorage.setItem('basket', JSON.stringify(basket))
      CountBasket();
    }
  }
}, 1000);

function CountBasket() {
  let basket = JSON.parse(localStorage.getItem('basket'));


  document.getElementsByClassName('count').innerHTML = basket.length
}

CountBasket();