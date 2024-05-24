function getQueryParams() {
    let params = {};
    window.location.search.substring(1).split("&").forEach(function(part) {
        let pair = part.split("=");
        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    });
    return params;
}

let params = getQueryParams();

if (params.photo) {
    let photoUrl = decodeURIComponent(params.photo); // Decode the URL
    let photoElement = document.getElementById('photo');
    photoElement.src = photoUrl;
    photoElement.style.display = 'block';
}

// Display other contact details
document.getElementById('name').innerText = params.name || "N/A";
document.getElementById('phone').innerText = params.phone ? params.phone.split(',').join(', ') : "N/A";
document.getElementById('email').innerText = params.email ? params.email.split(',').join(', ') : "N/A";
document.getElementById('address').innerText = params.address || "N/A";
document.getElementById('job').innerText = params.job || "N/A";
document.getElementById('company').innerText = params.company || "N/A";
document.getElementById('website').innerText = params.website || "N/A";
document.getElementById('facebook').innerText = params.facebook || "N/A";
document.getElementById('instagram').innerText = params.instagram || "N/A";
document.getElementById('whatsapp').innerText = params.whatsapp || "N/A";
