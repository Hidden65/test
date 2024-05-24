function getQueryParams() {
    let params = {};
    window.location.search.substring(1).split("&").forEach(function(part) {
        let pair = part.split("=");
        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    });
    return params;
}

let params = getQueryParams();
console.log("Photo URL:", params.photo); // Debugging line

if (params.photo) {
    let photoUrl = decodeURIComponent(params.photo);
    console.log('Decoded Photo URL:', photoUrl); // Debugging line
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

// Add to Contacts button functionality
document.getElementById('addToContacts').addEventListener('click', function() {
    let contact = {
        name: params.name || "",
        phone: params.phone ? params.phone.split(',') : [],
        email: params.email ? params.email.split(',') : [],
        address: params.address || "",
        job: params.job || "",
        company: params.company || "",
        website: params.website || "",
        facebook: params.facebook || "",
        instagram: params.instagram || "",
        whatsapp: params.whatsapp || ""
    };

    let vCard = `BEGIN:VCARD
VERSION:3.0
FN:${contact.name}
TEL;TYPE=CELL:${contact.phone[0]}
EMAIL:${contact.email[0]}
ADR:${contact.address}
ORG:${contact.company}
TITLE:${contact.job}
URL:${contact.website}
X-SOCIALPROFILE;type=facebook:${contact.facebook}
X-SOCIALPROFILE;type=instagram:${contact.instagram}
X-SOCIALPROFILE;type=whatsapp:${contact.whatsapp}
END:VCARD`;

    if (navigator.share && navigator.canShare && navigator.canShare({ files: [new Blob([vCard], { type: 'text/vcard' })] })) {
        navigator.share({
            title: 'Contact',
            files: [new Blob([vCard], { type: 'text/vcard' })],
            text: 'Here is the contact information'
        })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
    } else {
        console.error('Sharing not supported');
        // Fallback to some other method of sharing, or inform the user that sharing is not supported
    }
});
