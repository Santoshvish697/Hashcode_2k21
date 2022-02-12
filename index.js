
Moralis.initialize("EkpxM7nd8nei1ND3w4qvGGSQzjp0ynEI3lMHMKIU"); // Application id from moralis.io
Moralis.serverURL = "https://z6vc8d9dwelf.usemoralis.com:2053/server"; //Server url from moralis.io
async function login(){
    alert("hi");
    console.log("login clicked");
    var user = await Moralis.Web3.authenticate();
    if(user){
        console.log(user);
        user.set("nickname","VITALIK");
        user.set("fav_color","blue");
        user.save();
    }
}

