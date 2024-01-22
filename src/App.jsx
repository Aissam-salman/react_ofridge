import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='test'>

          <div className='rectangle'>
    <div className='divCompte'>
            <p id='p1'>
              Créer un compte
                   <p id='p2'>
                   Déja un compte ? Se connecter
                   </p>
            </p>
    </div>
    <div className='divNom'>
            <div className='prenom' >
                <p>Prénom</p>
                <input type="text" />
            </div>

            <div className='nom' >
                <p>Nom</p>
                <input type="text" />
            </div>

    </div>
              <div><p className='p3'>email</p> </div>
            <div className='email'>
              <input type="email" name="" id="" />
            </div>

    <div className='divNom'>
            <div className='prenom' >
                <p>Mot de passe</p>
                <input type="password" name="" id="" />
            <input type="checkbox" name="" id="checkbox" />
            </div>

            <div className='nom' >
                <p>Confirmer mot de passe</p>
                <input type="password" name="" id="" /> <br /> <br />
            <button id='button'>Valider</button>
            </div>



    </div>

          </div>
                 <div className='connexion'>
                 <img className='imgConnexion' src="https://s3-alpha-sig.figma.com/img/c5e7/6f7c/0a73aa3b84da416d8277004adea95999?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lf4fl-ksU0DFyHI40O8JLOEfnZKfTyaGukh8-pLrdDwH~0xMARYpoaqfgIPZV6P32laFdKHdiWH-WWN~KI3ruQor~1kh2bj2n5lqqg-94NGns-daW25Dm9ARxahELmZiCycdyVxk0MylnErBFPW1ntYxYawZxezAV3QzsUfK9YfYPKsN8PHZjLmAsjn2~s5Hq~FRRe78NZUA6GL8DbIBvWmTBsktlZhOLBrivloS0ee8-Z0RlF4QSGiJ~mTE9qpEQh-YTXPNrSbGsB6BUx7oW9LAQANN7Acm8rsWncuW9xbaTYxJNAAggOk2q-558qzz8J7PfZ5pFjnOCsqa3E8SQQ__" alt="" />

          </div>

          <div className='inscription'>
                 <img className='imgInscription' src="https://s3-alpha-sig.figma.com/img/6582/7845/3c9c4e65f8572e90432ec5b781ad0526?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f0HX50rRoVYqALzaDZAkbIiYcimkbe9mzsfkALy2kC9-Sn-JoXaMSrdGij1KaDTZdJ-N8m~8IBwkB-7iO-CQRd-RekGmK~JmnqMoJr03JWEiK0~PWO~LBpRup2GjCCBhdPw9l3B5K3omjwlNyOFjVz2rTJd-UC7ac~RsWmBs4O8gnw2FDN5lvAVALCG9YDtsDUGtaWC~JU6zq4wV1~oi~kckfciBYy7DkXVFhO2CtbgOUGQ1O27p3lXRrcVLwXq5fpcmyabLY74u5PaIdCtw6x0RQvtqeWpD5BuaPfEDVOJaQt~nJQ2lLPKR4XPj1K~7DziN6NiNQfVu02kt3e-KDQ__" alt="" />

          </div>

      </div>
    </>
  )
}

export default App
