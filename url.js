let name_bu = document.getElementById('name_bu');
let name_gakunen = document.getElementById('name_gakunen');
let name_dansi_kumi = document.getElementById('name_dansi_kumi');
let name_bangou = document.getElementById('name_bangou');
let name_namae = document.getElementById('name_namae');
let name_body_temperature = document.getElementById('name_body_temperature');
let name_health_condition = document.getElementById('name_health_condition');
let name_is_bad_condition = document.getElementById('name_is_bad_condition');
let name_is_bad_family_condition = document.getElementById('name_is_bad_family_condition');
let checkButton = document.getElementById('checkButton');
let url = document.getElementById('url');

function urlGenerate() {
    // いいえ
    url.value =
        "https://docs.google.com/forms/d/e/1FAIpQLSe9Zr3TqZ98pwU6XNRBF4ZthYw2TbFqfVPhRinndtSTYcwWZg/viewform?usp=pp_url"
        + "&entry.2079235297=" + name_bu.value
        + "&entry.865084182=" + name_gakunen.value
        + "&entry.647827530=" + name_dansi_kumi.value
        + "&entry.1854533710=" + name_bangou.value
        + "&entry.825151347=" + name_namae.value
        + "&entry.378294055=" + name_body_temperature.value
        + "&entry.1240639948=" + name_health_condition.value
        + "&entry.677661864=" + name_is_bad_condition.value
        + "&entry.1026424202=" + name_is_bad_family_condition.value;
}

function urlCopy() {
    url.select();
    document.execCommand("copy");
}

checkButton.addEventListener('click', urlGenerate);
checkButton.addEventListener('click', urlCopy);