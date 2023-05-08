import React, { useRef } from 'react';
import logo from '../../Imgs/favicon.png';
import Image from '../Image/Image';
import axios from "axios";
import Swal from 'sweetalert2';

const FormRegister = () => {
  const nameRef = useRef();
  const lastNameRef = useRef();  
  const emailRef = useRef();
  const passwordRef = useRef();
  const countryRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    let data = {
      [nameRef.current.name]: nameRef.current.value,
      [lastNameRef.current.name]: lastNameRef.current.value,
      [emailRef.current.name]: emailRef.current.value,
      [passwordRef.current.name]: passwordRef.current.value,
      [countryRef.current.name]: countryRef.current.value,
    };

    const url = 'http://localhost:8080/api/auth/signup';

    if (data.name.length < 3) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Name must be at least 3 characters long',
      });
      return;
    }

    if (data.password.length < 8) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Password must be at least 8 characters long',
      });
      return;
    }

    try {
      await axios.post(url, data);

      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'User successfully created',
      });

      event.target.reset();
    } catch (error) {
      console.log(error);

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong',
      });
    }
  };

  return (
    <div className='flex items-center justify-center h-screen bg-slate-900 '>
     <form className='form-container h-4/4 flex flex-col justify-center bg-slate-600 rounded-lg mx-auto sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4' onSubmit={handleSubmit}>

        <div className='flex flex-col items-center '>
          <h2 className='p-3 text-4xl text-center text-white hover:text-black pb-10 italic hover:not-italic underline underline-offset-8' >Log In in MovieMaze!!</h2>
          <Image className='w-1/4 pt-5 pb-5' src={logo} alt='logo' />
        </div>
        <div className='flex flex-col p-6 '>
        <label className='block p-2'>
            <span className="after:content-'*' after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
              Name
            </span>
            <input type='text' name='name' ref={nameRef} className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' placeholder='Tony' />
          </label>
          <label className='block p-2'>
            <span className="after:content-'*' after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
              Last Name
            </span>
            <input type='text' name='lastName' ref={lastNameRef} className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' placeholder='Stark' />
          </label>
          <label className='block p-2'>
            <span className="after:content-'*' after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
              Email
            </span>
            <input type='email' name='mail' ref={emailRef} className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' placeholder='you@example.com' />
          </label>
          <label className='block p-2'>
            <span className="after:content-'*' after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
              Password
            </span>
            <input type='password' name='password' ref={passwordRef} className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' />
          </label>
          <label className='block p-2'>
          <span className="after:content-'*' after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
              Country
            </span>
          <select 
          ref={countryRef}
          className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' name="country">
		<option value="Afganistán">Afganistán</option>
		<option value="Albania">Albania</option>
		<option value="Alemania">Alemania</option>
		<option value="Andorra">Andorra</option>
		<option value="Angola">Angola</option>
		<option value="Antigua y Barbuda">Antigua y Barbuda</option>
		<option value="Arabia Saudita">Arabia Saudita</option>
		<option value="Argelia">Argelia</option>
		<option value="Argentina">Argentina</option>
		<option value="Armenia">Armenia</option>
		<option value="Australia">Australia</option>
		<option value="Austria">Austria</option>
		<option value="Azerbaiyán">Azerbaiyán</option>
		<option value="Bahamas">Bahamas</option>
		<option value="Bangladés">Bangladés</option>
		<option value="Barbados">Barbados</option>
		<option value="Baréin">Baréin</option>
		<option value="Bélgica">Bélgica</option>
		<option value="Belice">Belice</option>
		<option value="Benín">Benín</option>
		<option value="Bielorrusia">Bielorrusia</option>
		<option value="Birmania/Myanmar">Birmania/Myanmar</option>
		<option value="Bolivia">Bolivia</option>
		<option value="Bosnia y Herzegovina">Bosnia y Herzegovina</option>
		<option value="Botsuana">Botsuana</option>
		<option value="Brasil">Brasil</option>
		<option value="Brunéi">Brunéi</option>
		<option value="Bulgaria">Bulgaria</option>
		<option value="Burkina Faso">Burkina Faso</option>
		<option value="Burundi">Burundi</option>
		<option value="Bután">Bután</option>
		<option value="Cabo Verde">Cabo Verde</option>
		<option value="Camboya">Camboya</option>
		<option value="Camerún">Camerún</option>
		<option value="Canadá">Canadá</option>
		<option value="Catar">Catar</option>
		<option value="Chad">Chad</option>
		<option value="Chile">Chile</option>
		<option value="China">China</option>
		<option value="Chipre">Chipre</option>
		<option value="Ciudad del Vaticano">Ciudad del Vaticano</option>
		<option value="Colombia">Colombia</option>
		<option value="Comoras">Comoras</option>
		<option value="Corea del Norte">Corea del Norte</option>
		<option value="Corea del Sur">Corea del Sur</option>
		<option value="Costa de Marfil">Costa de Marfil</option>
		<option value="Costa Rica">Costa Rica</option>
		<option value="Croacia">Croacia</option>
		<option value="Cuba">Cuba</option>
		<option value="Dinamarca">Dinamarca</option>
		<option value="Dominica">Dominica</option>
		<option value="Ecuador">Ecuador</option>
		<option value="Egipto">Egipto</option>
		<option value="El Salvador">El Salvador</option>
		<option value="Emiratos Árabes Unidos">Emiratos Árabes Unidos</option>
		<option value="Eritrea">Eritrea</option>
		<option value="Eslovaquia">Eslovaquia</option>
		<option value="Eslovenia">Eslovenia</option>
		<option value="España">España</option>
		<option value="Estados Unidos">Estados Unidos</option>
		<option value="Estonia">Estonia</option>
		<option value="Etiopía">Etiopía</option>
		<option value="Filipinas">Filipinas</option>
		<option value="Finlandia">Finlandia</option>
		<option value="Fiyi">Fiyi</option>
		<option value="Francia">Francia</option>
		<option value="Gabón">Gabón</option>
		<option value="Gambia">Gambia</option>
		<option value="Georgia">Georgia</option>
		<option value="Ghana">Ghana</option>
		<option value="Granada">Granada</option>
		<option value="Grecia">Grecia</option>
		<option value="Guatemala">Guatemala</option>
		<option value="Guyana">Guyana</option>
		<option value="Guinea">Guinea</option>
		<option value="Guinea ecuatorial">Guinea ecuatorial</option>
		<option value="Guinea-Bisáu">Guinea-Bisáu</option>
		<option value="Haití">Haití</option>
		<option value="Honduras">Honduras</option>
		<option value="Hungría">Hungría</option>
		<option value="India">India</option>
		<option value="Indonesia">Indonesia</option>
		<option value="Irak">Irak</option>
		<option value="Irán">Irán</option>
		<option value="Irlanda">Irlanda</option>
		<option value="Islandia">Islandia</option>
		<option value="Islas Marshall">Islas Marshall</option>
		<option value="Islas Salomón">Islas Salomón</option>
		<option value="Israel">Israel</option>
		<option value="Italia">Italia</option>
		<option value="Jamaica">Jamaica</option>
		<option value="Japón">Japón</option>
		<option value="Jordania">Jordania</option>
		<option value="Kazajistán">Kazajistán</option>
		<option value="Kenia">Kenia</option>
		<option value="Kirguistán">Kirguistán</option>
		<option value="Kiribati">Kiribati</option>
		<option value="Kuwait">Kuwait</option>
		<option value="Laos">Laos</option>
		<option value="Lesoto">Lesoto</option>
		<option value="Letonia">Letonia</option>
		<option value="Líbano">Líbano</option>
		<option value="Liberia">Liberia</option>
		<option value="Libia">Libia</option>
		<option value="Liechtenstein">Liechtenstein</option>
		<option value="Lituania">Lituania</option>
		<option value="Luxemburgo">Luxemburgo</option>
		<option value="Macedonia del Norte">Macedonia del Norte</option>
		<option value="Madagascar">Madagascar</option>
		<option value="Malasia">Malasia</option>
		<option value="Malaui">Malaui</option>
		<option value="Maldivas">Maldivas</option>
		<option value="Malí">Malí</option>
		<option value="Malta">Malta</option>
		<option value="Marruecos">Marruecos</option>
		<option value="Mauricio">Mauricio</option>
		<option value="Mauritania">Mauritania</option>
		<option value="México">México</option>
		<option value="Micronesia">Micronesia</option>
		<option value="Moldavia">Moldavia</option>
		<option value="Mónaco">Mónaco</option>
		<option value="Mongolia">Mongolia</option>
		<option value="Montenegro">Montenegro</option>
		<option value="Mozambique">Mozambique</option>
		<option value="Namibia">Namibia</option>
		<option value="Nauru">Nauru</option>
		<option value="Nepal">Nepal</option>
		<option value="Nicaragua">Nicaragua</option>
		<option value="Níger">Níger</option>
		<option value="Nigeria">Nigeria</option>
		<option value="Noruega">Noruega</option>
		<option value="Nueva Zelanda">Nueva Zelanda</option>
		<option value="Omán">Omán</option>
		<option value="Países Bajos">Países Bajos</option>
		<option value="Pakistán">Pakistán</option>
		<option value="Palaos">Palaos</option>
		<option value="Panamá">Panamá</option>
		<option value="Papúa Nueva Guinea">Papúa Nueva Guinea</option>
		<option value="Paraguay">Paraguay</option>
		<option value="Perú">Perú</option>
		<option value="Polonia">Polonia</option>
		<option value="Portugal">Portugal</option>
		<option value="Reino Unido">Reino Unido</option>
		<option value="República Centroafricana">República Centroafricana</option>
		<option value="República Checa">República Checa</option>
		<option value="República del Congo">República del Congo</option>
		<option value="República Democrática del Congo">República Democrática del Congo</option>
		<option value="República Dominicana">República Dominicana</option>
		<option value="República Sudafricana">República Sudafricana</option>
		<option value="Ruanda">Ruanda</option>
		<option value="Rumanía">Rumanía</option>
		<option value="Rusia">Rusia</option>
		<option value="Samoa">Samoa</option>
		<option value="San Cristóbal y Nieves">San Cristóbal y Nieves</option>
		<option value="San Marino">San Marino</option>
		<option value="San Vicente y las Granadinas">San Vicente y las Granadinas</option>
		<option value="Santa Lucía">Santa Lucía</option>
		<option value="Santo Tomé y Príncipe">Santo Tomé y Príncipe</option>
		<option value="Senegal">Senegal</option>
		<option value="Serbia">Serbia</option>
		<option value="Seychelles">Seychelles</option>
		<option value="Sierra Leona">Sierra Leona</option>
		<option value="Singapur">Singapur</option>
		<option value="Siria">Siria</option>
		<option value="Somalia">Somalia</option>
		<option value="Sri Lanka">Sri Lanka</option>
		<option value="Suazilandia">Suazilandia</option>
		<option value="Sudán">Sudán</option>
		<option value="Sudán del Sur">Sudán del Sur</option>
		<option value="Suecia">Suecia</option>
		<option value="Suiza">Suiza</option>
		<option value="Surinam">Surinam</option>
		<option value="Tailandia">Tailandia</option>
		<option value="Tanzania">Tanzania</option>
		<option value="Tayikistán">Tayikistán</option>
		<option value="Timor Oriental">Timor Oriental</option>
		<option value="Togo">Togo</option>
		<option value="Tonga">Tonga</option>
		<option value="Trinidad y Tobago">Trinidad y Tobago</option>
		<option value="Túnez">Túnez</option>
		<option value="Turkmenistán">Turkmenistán</option>
		<option value="Turquía">Turquía</option>
		<option value="Tuvalu">Tuvalu</option>
		<option value="Ucrania">Ucrania</option>
		<option value="Uganda">Uganda</option>
		<option value="Uruguay">Uruguay</option>
		<option value="Uzbekistán">Uzbekistán</option>
		<option value="Vanuatu">Vanuatu</option>
		<option value="Venezuela">Venezuela</option>
		<option value="Vietnam">Vietnam</option>
		<option value="Yemen">Yemen</option>
		<option value="Yibuti">Yibuti</option>
		<option value="Zambia">Zambia</option>
		<option value="Zimbabue">Zimbabue</option>
	</select>
  </label>
        </div>
		<button type="submit" className="w- 1/4 p-1 m-5
		rounded-full bg-black text-white ">Sign Up</button>
      </form>
    </div>
  );
};

export default FormRegister;
