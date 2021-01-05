import React from 'react';
import styles from '../styles/Login.module.css'
import formStyle  from '../styles/Form.module.css'


const Login: React.FC = () => {
  return (

    <div className={styles.containerLogin}>
         <section className={styles.wallpaperLogin}>
          <h1>Welcome  <br/> Back</h1>

         </section>
         <section className={styles.loginWrapper}>
              <h3>Login</h3>
              <p>Welcome to login page nice  to meet you!</p>

              <form action="" className={formStyle.Form}>
                
                  <div className={formStyle.inputBlock}>
                      <label htmlFor="">User Name</label>
                      <input type="text" placeholder="Username@gmail.com"/>
                  </div>
                 
                  <div className={formStyle.inputBlock}>
                      <label htmlFor="">Password</label>
                      <input type="password" placeholder="Username@gmail.com"/>
                  </div>  
                  
                  <div className={formStyle.btnsRemember}>
                    <div className={formStyle.Btns}>
                    
                    <input id="checkbox"type="checkbox"/>
                    <label  htmlFor="checkbox">Remember ME</label>
                    </div>    
                    <div>
                    <a className={formStyle.ForgotLink} href="">Forgot Password?</a>
                      </div>               
                  
                  </div>
               <button type="submit">Login</button> 


                  <span className={formStyle.Register}>Novo Usuário? <a href="">Registre-se</a></span>
              </form>


         </section>
    </div>
  );
}

export default Login;