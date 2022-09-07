import React, {useEffect, useRef} from "react";
import {View, Text, Alert, Button} from 'react-native';
// import ReCaptchaV3 from '@haskkor/react-native-recaptchav3';
// import ReCAPTCHA from "react-google-recaptcha";
import Recaptcha from 'react-native-recaptcha-that-works';

const App=()=>{
  const recaptcha = useRef();

useEffect(()=>{
send()
},[])

  const send = () => {
    console.log('send!');
    recaptcha.current.open();
}

const onVerify = token => {
    console.log('success!', token);
}

const onExpire = () => {
    console.warn('expired!');
}

const onLoad=()=>{
  console.warn('Loaded');
}

  // const [recaptcha, setRecaptcha] = React.useState('');

// const onChange=(value)=> {
//     console.log("Captcha value:", value);
//   }

//   const ReCap=()=>{
//     return(
//       <ReCAPTCHA
//       sitekey="6LdlmV0hAAAAABRj3ZlYWskTgcRh6ao312OvdNnl"
//       onChange={onChange}
//     />
//     )
//   }

  return(
    <View>
      <Text>hihihihihih</Text>
      <View>
      {/* <ReCaptchaV3
     captchaDomain={'https://www.google.com/recaptcha/api.js'}
     siteKey={'6LdlmV0hAAAAABRj3ZlYWskTgcRh6ao312OvdNnl'}
     onReceiveToken={(token) => Alert.alert('CAPTCHA', token) }
/> */}
<Recaptcha
                ref={recaptcha}
                siteKey="6LdlmV0hAAAAABRj3ZlYWskTgcRh6ao312OvdNnl"
                baseUrl="https://www.google.com/recaptcha/api.js"
                onVerify={onVerify}
                onExpire={onExpire}
                onLoad={onLoad}
                size="normal"
            />
            <Button title="Send" onPress={send} />
      </View>
    </View>
  )
}

export default App;