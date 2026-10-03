async function loadConfig() {
    const response = await fetch("./js/config.json");
    const config = await response.json();

    //IMAGE
    document.getElementById("page-icon").href = config.images.page_icon;
    document.getElementById("brand-logo").src = config.images.brand_logo;

    //TEXT
    document.getElementById("product-name").textContent = config.text.product_name;
    document.getElementById("promotion").textContent = config.text.product_promotion;
    document.getElementById("product-adjective").textContent = config.text.product_adjective;

    //COLOR
    const root = document.documentElement;
    root.style.setProperty("--theme", config.colors.hero_text_color);
    root.style.setProperty("--navbar", config.colors.navbar_text_color);
    root.style.setProperty("--blob", config.colors.blob_color);

    //BACKGROUND
    root.style.setProperty("--background", `url("../img/${config.images.web_background}")`);
}

loadConfig();