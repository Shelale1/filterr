// const cardInfo = document.getElementById("card-list");

// const infos = [
//   {
//     imgURL:
//       "https://a0.muscache.com/im/pictures/bae858fe-06e7-464c-b849-7f315a32eaa4.jpg?im_w=720",

//     star: "3",
//     city: "Национальный парк Мтирала в 19 км 1–6",
//     date: "18-23 Mart",
//     discount: "25%",
//     price: "92 000",
//   },
//   {
//     imgURL:
//       "https://a0.muscache.com/im/pictures/1da09442-8658-4dbe-9fc0-086f993d6fde.jpg?im_w=720",

//     star: "3",
//     city: "Национальный парк Мтирала в 19 км 1–6",
//     date: "18-23 Mart",
//     discount: "25%",
//     price: "92 000",
//   },
//   {
//     imgURL:
//       "https://a0.muscache.com/im/pictures/4a7104c1-ba19-428b-b48b-0894b6b947bf.jpg?im_w=720",

//     star: "5",
//     city: " Национальный парк Мтирала в 19 км 1–6",
//     date: "18-23 Mart",
//     discount: "25%",
//     price: "92 000",
//   },
//   {
//     imgURL:
//       "https://a0.muscache.com/im/pictures/miso/Hosting-702151759420900247/original/6cc11024-6131-45b8-96b8-d1c5d18c1118.jpeg?im_w=720",

//     star: "3",
//     city: "Национальный парк Мтирала в 19 км 1–6",
//     date: "18-23 Mart",
//     discount: "25%",
//     price: "92 000",
//   },
//   {
//     imgURL:
//       "	https://a0.muscache.com/im/pictures/miso/Hosting-815039437111852490/original/3b6d0589-001d-46e7-8fad-a6343a259769.jpeg?im_w=720",
//     star: "3",
//     city: "Национальный парк Мтирала в 19 км 1–6",
//     date: "18-23 Mart",
//     discount: "25%",
//     price: "29 000",
//   },
//   {
//     imgURL:
//       "https://a0.muscache.com/im/pictures/b1c84cff-4a68-446d-9e95-44aec4c69824.jpg?im_w=720",
//     star: "5",
//     city: "Национальный парк Мтирала в 19 км 1–6",
//     date: "18-23 Mart",
//     discount: "25%",
//     price: "92 000",
//   },

//   {
//     imgURL:
//       "https://a0.muscache.com/im/pictures/cd1f4f7b-0532-485e-9352-db7f72933c59.jpg?im_w=720",
//     star: "4",
//     city: "Национальный парк Мтирала в 19 км 1–6",
//     date: "18-23 Mart",
//     discount: "25%",
//     price: "92 000",
//   },

//   {
//     imgURL:
//       "	https://a0.muscache.com/im/pictures/airflow/Hosting-40283130/original/babc60de-942f-4aa3-8766-7a36a545331e.jpg?im_w=720",
//     star: "4",
//     city: "Национальный парк Мтирала в 19 км 1–6",
//     date: "18-23 Mart",
//     discount: "25%",
//     price: "92 000",
//   },
//   {
//     imgURL:
//       "https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F02%2F15%2F57%2F28%2Fe48e68f6-d3ac-44d8-95ae-4decd69e39f8%2F91818_nOfFoSukcEx6PRbxuPBeJQ.jpg",

//     star: "2",
//     city: "Национальный парк Мтирала в 19 км 1–6",
//     date: "18-23 Mart",
//     discount: "25%",
//     price: "92 000",
//   },
//   {
//     imgURL:
//       "https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F02%2F15%2F57%2F28%2Fe48e68f6-d3ac-44d8-95ae-4decd69e39f8%2F91818_nOfFoSukcEx6PRbxuPBeJQ.jpg",

//     star: "3",
//     city: "Национальный парк Мтирала в 19 км 1–6",
//     date: "18-23 Mart",
//     discount: "25%",
//     price: "92 000",
//   },
//   {
//     imgURL:
//       "	https://turbo.azstatic.com/uploads/f460x343/2023%2F10%2F02%2F15%2F57%2F28%2Fe48e68f6-d3ac-44d8-95ae-4decd69e39f8%2F91818_nOfFoSukcEx6PRbxuPBeJQ.jpg",

//     star: "3",
//     city: "Национальный парк Мтирала в 19 км 1–6",
//     date: "18-23 Mart",
//     discount: "25%",
//     price: "92 000",
//   },
//   {
//     imgURL:
//       "https://turbo.azstatic.com/uploads/f460x343/2023%2F09%2F21%2F22%2F53%2F13%2F51da98fc-843c-4bf5-a348-67be958996db%2F88104_JUqIUmF0TuGfnAolY7jApw.jpg",

//     star: "4",
//     city: "Национальный парк Мтирала в 19 км 1–6",
//     date: "18-23 Mart",
//     discount: "25%",
//     price: "92 000",
//   },
//   {
//     imgURL:
//       "https://turbo.azstatic.com/uploads/f460x343/2023%2F09%2F28%2F10%2F16%2F41%2F8c5a6308-7ec5-4dc1-b0af-1add20b821ba%2F96435_n4EuveKn9O_VU762OTkusg.jpg",

//     star: "1",
//     city: "Национальный парк Мтирала в 19 км 1–6",
//     date: "18-23 Mart",
//     discount: "25%",
//     price: "92 000",
//   },
// ];

// function getDatas(data) {
//   let txt = "";
//   data.forEach(function (item) {
//     txt += `<div class="card">
//           <div class="card-inner">

//           <div class="card-image">
//               <img src="${item.imgURL}"  alt="image"/>

//          </div>

//          <div class="heart"><i class="fa-regular fa-heart"></i></div>
//           <div class="card-content">
//             <div class="content-header"> <h3>${item.price} $</h3> <div> <i class="fa-regular fa-star"></i> ${item.star}</div></div>
//              <p>${item.city}</p>
//             <p>${item.date}</p>
//             <div>${item.discount}</div>
//             <div>${item.price}</div>

//           </div>

//           </div>
//           </div>
//           `;
//   });

//   cardInfo.innerHTML = txt;
// }

// getDatas(infos);
// var slider = document.getElementById("myRange");
// var output = document.getElementById("sliderValue");
// var convertedOutput = document.getElementById("convertedValue");
// var sliderCurrentValue = document.getElementById("sliderCurrentValue");
// var sliderIndicator = document.querySelector(".slider-indicator");

// output.innerHTML = "0 Azerbaijani Manat";
// convertedOutput.innerHTML = "0 Azerbaijani Manat";
// sliderCurrentValue.innerHTML = slider.value;
// updateSliderIndicator();

// slider.oninput = function () {
//   var currentValue = this.value;
//   output.innerHTML = currentValue + " Azerbaijani Manat";
//   convertedOutput.innerHTML = currentValue + " Azerbaijani Manat";
//   sliderCurrentValue.innerHTML = currentValue;
//   updateSliderIndicator();
// };

// function updateSliderIndicator() {
//   var percent = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
//   sliderIndicator.style.left = percent + "%";
// }
//
document.addEventListener("DOMContentLoaded", function () {
  const filterToggleBtn = document.getElementById("filter-toggle");
  const filterSection = document.getElementById("filter");
  const closeFilterBtn = document.querySelector(".header span");
  const starButtons = document.querySelectorAll(".star-button");
  const percentButtons = document.querySelectorAll(".percent-button");

  filterToggleBtn.addEventListener("click", toggleFilterSection);
  closeFilterBtn.addEventListener("click", toggleFilterSection);
  starButtons.forEach((button) => {
    button.addEventListener("click", function () {
      starButtons.forEach((btn) => btn.classList.remove("selected"));

      this.classList.add("selected");
    });
  });

  percentButtons.forEach((button) => {
    button.addEventListener("click", function () {
      starButtons.forEach((btn) => btn.classList.remove("selected"));

      this.classList.add("selected");
    });
  });

  function toggleFilterSection() {
    if (filterSection.style.display === "none") {
      filterSection.style.display = "block";
    } else {
      filterSection.style.display = "none";
    }
  }
});
