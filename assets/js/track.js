let getData = $.ajax(
    {
        type: "GET",
        url: 'https://www.cloudflare.com/cdn-cgi/trace',
        async: false
    }
).responseText;

let variables;
let getLoc = $.ajax(
    {
        type: 'GET',
        dataType: 'json',
        // url: 'http://ip-api.com/json',
        url: 'https://ipinfo.io/json',
        async: false,
    }
)
getLoc = Object.values(getLoc)[16]

function getEmail() {
    let user_name = document.getElementById("name-id").value;
    let user_email = document.getElementById("email-id").value;
    let user_subject = document.getElementById("subject-id").value;
    let user_comment = document.getElementById("comment-id").value;

    amplitude.getInstance().setUserId(user_email);
    amplitude.getInstance().logEvent(
        `PORTOFOLIO: \nName: ${user_name}\nData 1 : ${getData} \nData 2 :${getLoc}`
    );

    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&\
    to=aswindanu.prihastomo@gmail.com\
    ?subject=${user_subject}\
    &body=${user_comment}`;
};

amplitude.getInstance().setUserId(getData.match(/ip=(.*)/i)[0].replace('ip=', ''));
amplitude.getInstance().logEvent(
    `PORTOFOLIO: \nData 1 : ${getData} \nData 2 :${getLoc}`
);
document.write(new Date().getFullYear());