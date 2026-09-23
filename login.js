// Formulaire de connexion
function login() {
  const identifiant = document.getElementById("identifiant").value;
  const motDePasse = document.getElementById("mot-de-passe").value;

  if (identifiant === "" || motDePasse === "") {
    alert("Veuillez renseigner l'identifiant et le mot de passe.");
    return false;
  }
  console.log("Connexion de l'utilisateur : " + identifiant);
  return true;
}
