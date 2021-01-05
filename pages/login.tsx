import React from 'react';
import styles from '../styles/Login.module.css'
import formStyle  from '../styles/Form.module.css'


const Login: React.FC = () => {
  return (

    <div className={styles.containerLogin}>
         <section className={styles.wallpaperLogin}>
          <h1>Bem vindo de volta!</h1>

         </section>
         <section className={styles.loginWrapper}>
              <h3>Login</h3>
              <p>Bem vindo a página de Login, prazer em te conhecer = )</p>

              <form action="" className={formStyle.Form}>
                
                  <div className={formStyle.inputBlock}>
                      <label htmlFor="">Usuário</label>
                      <input type="text" placeholder="Username@gmail.com"/>
                  </div>
                 
                  <div className={formStyle.inputBlock}>
                      <label htmlFor="">Senha</label>
                      <input type="password" placeholder="Password"/>
                  </div>  
                  
                  <div className={formStyle.btnsRemember}>
                    <div className={formStyle.Btns}>
                    
                    <input id="checkbox"type="checkbox"/>
                    <label  htmlFor="checkbox">Lembrar Senha</label>
                    </div>    
                    <div>
                    <a className={formStyle.ForgotLink} href="">Esqueceu sua senha?</a>
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