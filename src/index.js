import "./styles.css";
import burger from "./2492_medium_US_en.png"

let data = []
let current = document.getElementById("menulist").innerHTML;

let template = `<li>
                    <a>
                        <div class="item">
                            <div><img src="${burger}"></div>
                            <div>
                                <h2>Pretzel Bacon Pub Cheeseburger Combo</h2>
                                <h3>$10.99</h3>
                            </div>
                            <div>
                                <a><span>View Item</span></a>
                            </div>
                        </div>
                    </a>
                    <div></div>
                </li>`


document.querySelector(".hamburgers").addEventListener("click", (e) => {
    const container = document.getElementById("menulist");
    const title = document.getElementById("title");
    container.innerHTML = template
    title.innerHTML = "Hamburgers"
})

document.querySelector(".combos").addEventListener("click", (e) => {
        const container = document.getElementById("menulist");
    const title = document.getElementById("title");
    container.innerHTML = current
    title.innerHTML = "Combos"
    })