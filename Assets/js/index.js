console.log('Hello World')
var db = firebase.database();

$("#submit").on('click',function(e){
    e.preventDefault();

    var name = $('#name').val().trim()
    var email = $('#email').val().trim()
    var subject = $('#subject').val().trim()
    var message = $('#message').val().trim()
    console.log(name)
    console.log(email)
    console.log(subject)
    console.log(message)
    db.ref().push({
        name : name,
        email : email,
        subject : subject,
        message : message
    })
    window.location.replace("thanks.html");
})