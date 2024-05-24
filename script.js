
document.getElementById('addMobile').addEventListener('click', function() {
    var newMobileInput = document.createElement('input');
    newMobileInput.type = 'tel';
    newMobileInput.name = 'mobile[]';
    newMobileInput.placeholder = 'Additional Mobile Number';
    document.getElementById('mobileNumbers').appendChild(newMobileInput);
});

document.getElementById('addEmail').addEventListener('click', function() {
    var newEmailInput = document.createElement('input');
    newEmailInput.type = 'email';
    newEmailInput.name = 'email[]';
    newEmailInput.placeholder = 'Additional Email Address';
    document.getElementById('emails').appendChild(newEmailInput);
});

document.getElementById('generate').addEventListener('click', function() {
    var photoFile = document.getElementById('photo').files[0];
    var name = document.getElementById('name').value;
    var mobiles = document.getElementsByName('mobile[]');
    var emails = document.getElementsByName('email[]');
    var address = document.getElementById('address').value;
    var job = document.getElementById('job').value;
    var company = document.getElementById('company').value;
    var website = document.getElementById('website').value;
    var facebook = document.getElementById('facebook').value;
    var instagram = document.getElementById('instagram').value;
    var whatsapp = document.getElementById('whatsapp').value;

    var mobileNumbers = Array.from(mobiles).map(input => input.value).join(',');
    var emailAddresses = Array.from(emails).map(input => input.value).join(',');

    var generateQRCode = function(photoDataUrl) {
        var url = `https://hidden65.github.io/test/contact.html?photo=${encodeURIComponent(photo)}&name=${encodeURIComponent(name)}&phone=${encodeURIComponent(mobileNumbers)}&email=${encodeURIComponent(emailAddresses)}&address=${encodeURIComponent(address)}&job=${encodeURIComponent(job)}&company=${encodeURIComponent(company)}&website=${encodeURIComponent(website)}&facebook=${encodeURIComponent(facebook)}&instagram=${encodeURIComponent(instagram)}&whatsapp=${encodeURIComponent(whatsapp)}`;

        var qrCodeElement = document.getElementById('qrcode');
        qrCodeElement.innerHTML = "";
        new QRCode(qrCodeElement, {
            text: url,
            width: 256,
            height: 256
        });
    };

    if (photoFile) {
        var reader = new FileReader();
        reader.onload = function(event) {
            generateQRCode(event.target.result);
        };
        reader.readAsDataURL(photoFile);
    } else {
        generateQRCode('');
    }
});
