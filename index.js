const urlParams = new URLSearchParams(window.location.search);
const captureButton = document.getElementById("capture-button");

captureButton.addEventListener("click", () => {
  document.getElementById("container").style.display = "none";
  document.getElementById("success_container").style.display = "block";
  const id = urlParams.get("id");
  let url = "https://6393561fab513e12c50b63b8.mockapi.io/api/wallet/" + id;
  fetch(url, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      qrLoginAuth: true,
    }),
  });
});
