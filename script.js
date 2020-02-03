function emailcheck() {
  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      document.querySelector("#mail").value
    )
  ) {
    document.querySelector(".error").style.display = "none";
    document.querySelector(".error_para").style.display = "none";
  } else {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".error_para").style.display = "block";
    document.querySelector("#mail").style.borderColor = "#f96262";
    document.querySelector("#mail").style.borderWidth = "2px";
  }
}
