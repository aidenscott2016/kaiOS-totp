  const otp = window.otplib

  const secret = 'WBTVKFRMCSUZO7NKIMMJEDQJ362TAFSG'
  const token = otplib.authenticator.generate(secret);

  const displayToken = () => {
    const token = otplib.authenticator.generate(secret);
    document.getElementById("content").innerHTML = token
  }
  displayToken();

  setInterval(displayToken, 10000 ) 
