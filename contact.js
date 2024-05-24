// Add to Contacts button functionality
document.getElementById('addToContacts').addEventListener('click', function() {
    let contactName = document.getElementById('name').innerText;
    let contactPhone = document.getElementById('phone').innerText;
    let contactEmail = document.getElementById('email').innerText;

    // Create a VCF (vCard) string
    let vcfData = `BEGIN:VCARD
VERSION:3.0
FN:${contactName}
TEL:${contactPhone}
EMAIL:${contactEmail}
END:VCARD`;

    // Create a Blob from the VCF data
    let blob = new Blob([vcfData], { type: 'text/vcard' });

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
