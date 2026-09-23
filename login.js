// Formulaire de connexion
function login() {
  const val1 = document.getElementById("identifiant").value;
  const val2 = document.getElementById("mot-de-passe").value;

  if (val1 === "" || val2 === "") {
    alert("Veuillez renseigner l'identifiant et le mot de passe.");
    return false;
  }
  console.log("Connexion de l'utilisateur : " + val1);
  return true;
}
