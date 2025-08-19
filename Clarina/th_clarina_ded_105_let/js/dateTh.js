function dtime(daysBefore) {
    var d = new Date(new Date() - 24 * 3600 * 1000 * daysBefore);
    d.setFullYear(d.getFullYear() + 543);
    var mnth = new Array("01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12");
    var month = new Array("มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม");
    document.write(d.getDate() + " " + month[d.getMonth()] + " " + d.getFullYear());
  }

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("currentYear").textContent = new Date().getFullYear()+543;
  });