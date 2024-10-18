const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name');/*Se agrega "#" ya que name es una clase*/
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

const displayUser=async(username)=>/*Se optimiza cambiando a funcion flecha y se agrega la palabra reservada "async"*/
{
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const usuario=await response.json();/*Se agrega la línea para conversión a formato json*/
  console.log(usuario.data);
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

const handleError=(err)=>//Se optimiza cambiando a funcion flecha
{
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;/*Se agrega "$" a la variable ya que se declaro se está manera y ";" al final de la líea de código*/
}

displayUser('stolinski').catch(handleError($n));