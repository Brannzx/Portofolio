document.addEventListener("DOMContentLoaded", function () {
    let copyrightDiv = document.createElement("div");
    copyrightDiv.id = "copyright";

    copyrightDiv.classList.add("container", "flex", "flex-col", "items-center", "justify-center", "p-6", "mx-auto", "space-y-2", "sm:space-y-0", "sm:flex-row");

    let copyrightText = decodeURIComponent("%3C%70%20%63%6C%61%73%73%3D%22%74%65%78%74%2D%73%6D%20%74%65%78%74%2D%63%65%6E%74%65%72%20%74%65%78%74%2D%67%72%61%79%2D%36%30%30%20%64%61%72%6B%3A%74%65%78%74%2D%67%72%61%79%2D%33%30%30%22%3E%C2%A9%20%43%6F%70%79%72%69%67%68%74%20%32%30%32%35%20%47%69%62%72%61%6E%69%20%4E%61%72%6D%61%64%61%20%41%2E%41%2E%20%41%6C%6C%20%52%69%67%68%74%73%20%52%65%73%65%72%76%65%64%2E%3C%2F%70%3E");

    copyrightDiv.innerHTML = copyrightText;

    let footer = document.getElementById("footer");
    if (footer) {
        footer.appendChild(copyrightDiv);
    } else {
        console.error("Elemen #footer tidak ditemukan!");
    }
});
