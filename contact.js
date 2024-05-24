// Add to Contacts button functionality
document.getElementById('addToContacts').addEventListener('click', function() {
    let contactName = document.getElementById('name').innerText;
    let contactPhone = document.getElementById('phone').innerText;
    let contactEmail = document.getElementById('email').innerText;
    let contactAddress = document.getElementById('address').innerText;
    let contactJob = document.getElementById('job').innerText;
    let contactCompany = document.getElementById('company').innerText;
    let contactWebsite = document.getElementById('website').innerText;
    let contactFacebook = document.getElementById('facebook').innerText;
    let contactInstagram = document.getElementById('instagram').innerText;
    let contactWhatsApp = document.getElementById('whatsapp').innerText;
    
    // Create vCard content
    let vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${contactName}
TEL:${contactPhone}
EMAIL:${contactEmail}
ADR:${contactAddress}
ORG:${contactCompany}
TITLE:${contactJob}
URL:${contactWebsite}
X-SOCIALPROFILE;type=facebook:${contactFacebook}
X-SOCIALPROFILE;type=instagram:${contactInstagram}
X-SOCIALPROFILE;type=whatsapp:${contactWhatsApp}
END:VCARD`;
    
    // Create a Blob from the vCard data
    let blob = new Blob([vCardData], { type: 'text/vcard' });

    // Create a URL for the Blob
    let url = URL.createObjectURL(blob);

    // Create a temporary link element
    let link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'contact.vcf');
    link.style.display = 'none';

    // Append the link to the body and trigger the click event
    document.body.appendChild(link);
    link.click();

    // Clean up: remove the link and revoke the URL
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
});
