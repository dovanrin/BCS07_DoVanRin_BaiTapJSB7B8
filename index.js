// Bài 1: nhập số vào mảng
var mangDuLieu = [];
function themSoVaoMang() {
  var duLieu = document.getElementById("soN").value * 1;
  // mangDuLieu = [16.5, 16, 12, 19, 20, 19, 3];
  mangDuLieu.push(duLieu);

  document.getElementById("mangNguoiDungNhap").innerHTML =
    "Mảng dử liệu người dùng nhập: " + mangDuLieu;
}
// Bài 2: Tính tổng các số dương
function tinhTongCacSoDuong() {
  var tongSoDuong = 0;
  for (var i = 0; i < mangDuLieu.length; i++) {
    if (mangDuLieu[i] > 0) {
      tongSoDuong += mangDuLieu[i];
    }
  }
  console.log(tongSoDuong);
  document.getElementById("tongCacSoDuong").innerHTML =
    "Tổng các số nguyên dương cộng lại là: " + tongSoDuong;
}
// bài 3: Đếm số dương
function demCacSoDuong() {
  var demCacSoDuong = 0;
  for (var i = 0; i < mangDuLieu.length; i++) {
    if (mangDuLieu[i] > 0) {
      demCacSoDuong++;
    }
  }
  document.getElementById("demSoDuong").innerHTML =
    "Có tất cả: " + demCacSoDuong + " số nguyên dương.";
}
// Bài 3: Tìm số nhỏ nhất
function timSoNhoNhat() {
  var min = mangDuLieu[0];
  for (var i = 0; i < mangDuLieu.length; i++) {
    if (min > mangDuLieu[i]) {
      min = mangDuLieu[i];
    }
  }
  document.getElementById("timSoNhoNhat").innerHTML = "Số nhỏ nhất là: " + min;
}
// =======bai 4=========

function timSoDuongNhoNhat() {
  var mangDuLieuDuong = [];
  for (var i = 0; i < mangDuLieu.length; i++) {
    var duLieuDuong = 0;

    if (mangDuLieu[i] > 0) {
      duLieuDuong = mangDuLieu[i];
      console.log(duLieuDuong);
      mangDuLieuDuong.push(mangDuLieu[i]);
    }
  }

  // mangDuLieuDuong.push(duLieuDuong);
  console.log(mangDuLieuDuong);
  // for (var i = 0; i < mangDuLieu.length; i++) {
  //   if (0 < mangDuLieu[i] && bienMin > mangDuLieu[i]) {
  //     bienMin = mangDuLieu[i];
  //   }
  // }
  var bienMin = mangDuLieuDuong[0];
  for (var z = 0; z < mangDuLieuDuong.length; z++) {
    if (bienMin > mangDuLieuDuong[z]) {
      bienMin = mangDuLieuDuong[z];
    }
  }
  document.getElementById("soDuongNhoNhat").innerHTML =
    "Số dương nhỏ nhất là: " + bienMin;
}

// ===Bai 5============
function timSoChanCuoi() {
  var soChanCuoi = 0;
  var lastIndex = mangDuLieu.length - 1;

  for (var i = lastIndex; i > 0; i--) {
    if (mangDuLieu[i] % 2 == 0) {
      soChanCuoi = mangDuLieu[i];
      break;
    }
    if (mangDuLieu[i] % 2 != 0) {
      soChanCuoi = -1;
    }
  }

  document.getElementById("timSoChanCuoi").innerHTML =
    "Số Chẵn cuối trong mảng là: " + soChanCuoi;
}
// =======Bai 6========/
function hoanDoiViTri() {
  var viTri1 = document.getElementById("viTri1").value;
  var viTri2 = document.getElementById("viTri2").value;
  var bienTam = mangDuLieu[viTri1];

  mangDuLieu[viTri1] = mangDuLieu[viTri2];
  mangDuLieu[viTri2] = bienTam;
  // cach 2
  // mangDuLieu[viTri1] /* 5 */ = mangDuLieu[viTri2] + mangDuLieu[viTri1];
  // mangDuLieu[viTri2] /* 3 */ = mangDuLieu[viTri1] /* 8 */ - mangDuLieu[viTri2];

  // mangDuLieu[viTri1] = mangDuLieu[viTri1] - mangDuLieu[viTri2];

  document.getElementById("doiViTri").innerHTML = mangDuLieu;
}
/* Bài Tập 7 */
function sapXepTangDan() {
  var mangDuLieu2 = [];
  for (var i = 0; i < mangDuLieu.length; i++) {
    var duLieu2 = parseFloat(mangDuLieu[i]);

    mangDuLieu2.push(duLieu2);
    //   console.log(mangDuLieu2);
  }
  document.getElementById("sapXepTangDan").innerHTML =
    "Thứ tự tăng dần trong mảng: " +
    mangDuLieu2.sort(function (a, b) {
      return a - b;
    });
}

/* Bai8 */
function xacDinhNguyenTo() {
  var ketQua = 0;
  var soNguyenTo = 0;

  for (var z = 0; z < mangDuLieu.length; z++) {
    soNguyenTo = 0;
    for (var j = 1; j <= mangDuLieu[z]; j++) {
      if (mangDuLieu[z] % j == 0) {
        soNguyenTo++;
      }
    }
    if (soNguyenTo == 2) {
      ketQua = mangDuLieu[z];
      break;
    } else {
      ketQua = -1;
    }
  }

  document.getElementById("timSoNguyenTo").innerHTML =
    "Số Nguyên tố đầu tiên trong mảng là: " + ketQua;
}
// =====Bài 9============
// var mangDuLieu = [];
// function themSoVaoMang() {
//   var duLieu = document.getElementById("soN").value * 1;
//   // mangDuLieu = [16.5, 16, 12, 19, 20, 19, 3];
//   mangDuLieu.push(duLieu);

//   document.getElementById("mangNguoiDungNhap").innerHTML =
//     "Mảng dử liệu người dùng nhập: " + mangDuLieu;
// }
function demCacSoNguyen() {
  var demSoNguyen = 0;
  for (var i = 0; i < mangDuLieu.length; i++)
    if (Number.isInteger(mangDuLieu[i])) {
      demSoNguyen++;
    }
  document.getElementById("nhapSoThuc").innerHTML =
    "Tổng số nguyên là: " + demSoNguyen;
}
/* bài Tập 10 */
function soSanhAmDuong() {
  var soDuong = 0;
  var soAm = 0;
  for (var i = 0; i < mangDuLieu.length; i++) {
    if (mangDuLieu[i] > 0) {
      soDuong++;
    } else {
      soAm++;
    }
  }
  if (soDuong > soAm) {
    document.getElementById("soSanhAmDuong").innerHTML =
      "Số dương nhiều hơn số âm. Với số dương là: " +
      soDuong +
      " và số âm là: " +
      soAm;
  } else {
    document.getElementById("soSanhAmDuong").innerHTML =
      "Số âm nhiều hơn số dương. Với số dương là: " +
      soDuong +
      " và số âm là: " +
      soAm;
  }
}
