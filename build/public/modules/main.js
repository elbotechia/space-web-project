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

const showAuth = ()=>{
   const app = document.getElementById("app");
   if (app) {
       app.innerHTML = AuthTemplate()
       switcherAuth()
   }
}

showAuth()
