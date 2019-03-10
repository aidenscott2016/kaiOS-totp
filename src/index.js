import otplib from 'otplib';

debugger;

const secret = 'WBTVKFRMCSUZO7NKIMMJEDQJ362TAFSG';
const token = otplib.authenticator.generate(secret);

const displayToken = () => {
  const token = otplib.authenticator.generate(secret);
  //document.getElementById("content").innerHTML = token
  console.log(token);
}
displayToken();

setInterval(displayToken, 10000 );
