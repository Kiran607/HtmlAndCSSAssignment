$(".btnSend").on("click", function (e) {
        let chat = {
            to: $("#totext").val(),
            message: $("#messageText").val()
        }
        message(chat)
        console.log(chat);
        e.preventDefault();
});

$("#btnsendMsg").on("click", function (e) {
    let chat = {
        message: $("#newTextMsg").val()
    }
    receiverMessage(chat)
    console.log(chat);
    e.preventDefault();
});




let message = (chat) => {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/message',
        dataType: 'json',
        data: chat,
        success: function (chat) {
            console.log("Added successfully", chat);
        },
        error: function () {
            console.log("nont saving message");
        }
    });
}

let receiverMessage = (chat) => {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/receiver',
        dataType: 'json',
        data: chat,
        success: function (chat) {
            console.log("Added successfully", chat);
        },
        error: function () {
            console.log("nont saving message");
        }
    });
}

$(document).ready(function () {
    getDetails();
    getReceiverDetails();
});

function getDetails() {
    $('#details').html('');
    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/message',
        dataType: 'json',
        data: {
            test: 'test data'
        },
        success: function (data) {
            $.each(data, function (i, data1) {
                let tblRow = "<div class=displayMessage>" +data1.message+"</div>"
                $(tblRow).appendTo("#details");
            });
        },

        error: function () {
            alert("not fetching employee data");
        }

    });
}

function getReceiverDetails() {
    $('#recevierDetails').html('');
    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/receiver',
        dataType: 'json',
        data: {
            test: 'test data'
        },
        success: function (data) {
            $.each(data, function (i, data1) {
                let tblRow = "<div class=receiverMessage>" +data1.message+"</div>"
                $(tblRow).appendTo("#recevierDetails");
            });
        },

        error: function () {
            alert("not fetching employee data");
        }

    });
}