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
        url: 'http://ip-api.com/json',
        async: false,
    }
)
getLoc = Object.values(getLoc)[16]

function getEmail() {
    let user_email = document.getElementById("email-id").value;
    amplitude.getInstance().setUserId(user_email);
    amplitude.getInstance().logEvent(
        `PORTOFOLIO: \nData 1 : ${getData} \nData 2 :${getLoc}`
    );

    window.location.href = "mailto:aswindanu.prihastomo@gmail.com";
};

amplitude.getInstance().setUserId(getData.match(/ip=(.*)/i)[0].replace('ip=', ''));
amplitude.getInstance().logEvent(
    `PORTOFOLIO: \nData 1 : ${getData} \nData 2 :${getLoc}`
);
document.write(new Date().getFullYear());