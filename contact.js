function getQueryParams() {
    let params = {};
    window.location.search.substring(1).split("&").forEach(function(part) {
        let pair = part.split("=");
        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    });
    return params;
}

let params = getQueryParams();

// Display received parameters (for debugging)
console.log("Received Parameters:", params);

// Display contact details
document.getElementById('name').innerText = params.name || "N/A";
document.getElementById('phone').innerText = params.phone || "N/A";
document.getElementById('email').innerText = params.email || "N/A";
document.getElementById('address').innerText = params.address || "N/A";
document.getElementById('job').innerText = params.job || "N/A";
document.getElementById('company').innerText = params.company || "N/A";
document.getElementById('website').innerText = params.website || "N/A";
document.getElementById('facebook').innerText = params.facebook || "N/A";
document.getElementById('instagram').innerText = params.instagram || "N/A";
document.getElementById('whatsapp').innerText = params.whatsapp || "N/A";
