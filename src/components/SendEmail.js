
const SendEmail = () => {

    emailjs.init("tGH5LR53qMLK6-yju");
    var serviceID = "service_eochi2l";
    var templateID = "template_7ue0vha";
    var templateParams = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    emailjs.send(serviceID, templateID, templateParams).then(
        function (response) {
            alert(
                "Message has been sent successfully!",
                response.status,
                response.text
            );
            console.log(response);
        },
        function (error) {
            alert("Error sending message!", error);
        }
    ).then(() => {
        // Xóa dữ liệu của form
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    });

}

export default SendEmail