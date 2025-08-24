const AuthTemplate = ()=>{
    return(`
        
        <div class="container">
            <button id="btnAuth1">LOGIN</button>
            <button id="btnAuth2">CADASTRO</button>
            <button id="btnAuth3">RECUPERAR CONTA</button>


            </div>
        
        `)
}


const SignInTemplate = ()=>{
    return(`
        <form id="signInForm">
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" required>
            </div>
            <button type="submit" class="btn btn-primary">Sign In</button>
        </form>
    `)
}

const SignUpTemplate = ()=>{
    return(`
                       <form>
                    <div class="form-control">
                        <label for="nomeReferencial">Nome Referencial:</label>
                        <input type="text" id="nomeReferencial" name="nomeReferencial" required>
                    </div>
                    <div class="form-control">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" required>
                    </div>
                    <div class="form-control">
                        <label for="emailInstitucional">Email Institucional:</label>
                        <input type="email" id="emailInstitucional" name="emailInstitucional" required>
                    </div>
                    <div class="form-control">
                        <label for="documentoOficial">CPF no formato (XXX.XXX.XXX-XX):</label>
                        <input type="text" id="documentoOficial" name="documentoOficial " required>
                    </div>
                    <button id="btnSignUp">CADASTRAR</button>
                </form>
    `)
}


const recoveryTemplate = ()=>{
    return(`
        <form id="recoveryForm">
            <div class="mb-3">
                <label for="identifier" class="form-label">Email ou Username</label>
                <input type="text" class="form-control" id="identifier" required>
            </div>
            <div class="mb-3">
                <label for="documentoOficial" class="form-label">CPF no formato (XXX.XXX.XXX-XX):</label>
                <input type="text" class="form-control" id="documentoOficial" required>
            </div>
            <button type="submit" class="btn btn-primary">Recover Password</button>
        </form>
    `)
}

const contactTemplate = ()=>{
    return(
        `
        <section>
        <h2>Contato</h2>
        <p>Entre em contato conosco através do formulário abaixo:</p>
        <form>
          <label for="name">Nome:</label>
          <input type="text" id="name" name="name" required />
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label for="message">Mensagem:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
        `
    )
}

const AboutTemplate = ()=>{
    return(`
         <section class="hero">
        <h2>Bem-vindo ao Desafio 2</h2>
        <p>Este é um exemplo de página HTML estruturada.</p>
      </section>
      <section class="features">
        <h2>Recursos do Desafio 2</h2>
        <ul>
          <li>Recurso 1</li>
          <li>Recurso 2</li>
          <li>Recurso 3</li>
        </ul>
        <ul>
          <li>Recurso 1</li>
          <li>Recurso 2</li>
          <li>Recurso 3</li>
        </ul>
        <ul>
          <li>Recurso 1</li>
          <li>Recurso 2</li>
          <li>Recurso 3</li>
        </ul>
      </section>
        `)
}


const switcherAuth = ()=>{
    const app = document.getElementById("app")
    document.getElementById("btnAuth1")?.addEventListener("click", ()=>{
        app.innerHTML = SignInTemplate()
    })
    document.getElementById("btnAuth2")?.addEventListener("click", ()=>{
        app.innerHTML = SignUpTemplate()
    })
    document.getElementById("btnAuth3")?.addEventListener("click", ()=>{
        app.innerHTML = recoveryTemplate()
    })

}


const offCanvasSwitcher = ()=>{
        document.getElementById("offCanvasBtn1")?.addEventListener("click", ()=>{
        app.innerHTML=AuthTemplate()
         switcherAuth()
    })

        document.getElementById("offCanvasBtn2")?.addEventListener("click", ()=>{
        app.innerHTML=AboutTemplate()
         switcherAuth()
    })

        document.getElementById("offCanvasBtn3")?.addEventListener("click", ()=>{
        app.innerHTML=contactTemplate()
    })
}


const showAuth = ()=>{
   const app = document.getElementById("app");
   if (app) {
       app.innerHTML = AuthTemplate()
       switcherAuth()
   }
}

showAuth()
offCanvasSwitcher()