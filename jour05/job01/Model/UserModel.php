<?php

session_start();
//constante d'envoronnement
define("DBHOST", "localhost");
define("DBUSER", "root");
define("DBPASS", "");
define("DBNAME", "utilisateurs");


class UserModel
{
    protected $id;
    protected $nom;
    protected $prenom;
    protected $email;
    protected $password;


    protected $bdd;

    //le constructeur
    public function __construct()
    {
        //DSN de connexion (data source name)
        $dsn = "mysql:dbname=" . DBNAME . ";host=" . DBHOST;

        // on va se connecter a la base a travers un try catch pour gerer l'exeption levé par pdo
        try {
            //on va instancie PDO
            $this->bdd = new PDO($dsn, DBUSER, DBPASS);

            //On s'assure d'envoyer les données en utf8
            $this->bdd->exec("SET NAMES utf8");

            //on definit le mode de fetch par defaut
            $this->bdd->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,  PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            die("Erreur de connexion a la base: " . $e->getMessage());
        }
        return $this->bdd;
    }





    /**
     * Methode pour chercher un utilisateur avec son email
     *
     * @param [type] $email
     * @return void
     */
    public function findByEmail($email)
    {
        $sqlVerif = "SELECT * FROM utilisateurs WHERE email =:email";

        //ON PREPARE LA REQUETE
        $requete = $this->bdd->prepare($sqlVerif);

        //ON INJECTE LES VALEURS AVEC LA FONCTION "bindValue"
        //PDO::PARAM_STR Pour dire que notre paramètre est une chaine de carractère
        $requete->bindValue(":email", $email, PDO::PARAM_STR);

        //ON EXECUTE LA REQUETE
        $requete->execute();

        $select = $requete->fetchAll();

        return $select;
    }





    /**
     *Méthode d'inscription d'utilisateur
     *
     * @param [type] $nom
     * @param [type] $prenom
     * @param [type] $email
     * @param [type] $password
     * @return void
     */
    public function register($nom, $prenom, $email, $password)
    {

        $sql1 = "INSERT INTO `utilisateurs`(`nom`, `prenom`, `email`, `password`) VALUES ( :nom,:prenom , :email, :password)";

        //ON PREPARE LA REQUETE
        $requete1 = $this->bdd->prepare($sql1);

        //ON INJECTE LES VALEURS AVEC LA FONCTION "bindValue"
        //PDO::PARAM_STR Pour dire que notre paramètre est une chaine de carractère
        $requete1->bindValue(":nom", $nom, PDO::PARAM_STR);
        $requete1->bindValue(":prenom", $prenom, PDO::PARAM_STR);
        $requete1->bindValue(":email", $email, PDO::PARAM_STR);
        $requete1->bindValue(":password", $password, PDO::PARAM_STR);

        //ON EXECUTE LA REQUETE
        $requete1->execute();
    }



    /**
     *Methode pour savoir si une utilisateur existe deja dans la base de donnée
     *
     * @param [type] $email
     * @param [type] $password
     * @return void
     */
    public function findByEmailAndPassword($email, $password)
    {

        $sql = "SELECT * FROM `utilisateurs` WHERE email = :email AND password = :password";

        //ON PREPARE LA REQUETE
        $requete = $this->bdd->prepare($sql);

        //ON INJECTE LES VALEURS AVEC LA FONCTION "bindValue"
        //PDO::PARAM_STR Pour dire que notre paramètre est une chaine de carractère
        $requete->bindValue(":email", $email, PDO::PARAM_STR);
        $requete->bindValue(":password", $password, PDO::PARAM_STR);

        //ON EXECUTE LA REQUETE
        $requete->execute();

        $utilisateur = $requete->fetch();
        if ($utilisateur->rowCount() > 0) {

            $this->id = $utilisateur["id"];
            $this->nom = $utilisateur["nom"];
            $this->prenom = $utilisateur["prenom"];
            $this->email = $utilisateur["email"];

            return $utilisateur;
        }
    }



    /**
     * Methode pour connecté un utilisateur
     *
     * @param [type] $email
     * @param [type] $password
     * @return void
     */
    public function connect($email, $password)
    {

        $sql = "SELECT * FROM `utilisateurs` WHERE email = :email AND password = :password";

        //ON PREPARE LA REQUETE
        $requete = $this->bdd->prepare($sql);

        //ON INJECTE LES VALEURS AVEC LA FONCTION "bindValue"
        //PDO::PARAM_STR Pour dire que notre paramètre est une chaine de carractère
        $requete->bindValue(":email", $email, PDO::PARAM_STR);
        $requete->bindValue(":password", $password, PDO::PARAM_STR);

        //ON EXECUTE LA REQUETE
        $requete->execute();

        $utilisateur = $requete->fetch();

        $_SESSION['utilisateur'] = [
            "id" => $utilisateur["id"],
            "nom" => $utilisateur["nom"],
            "prenom" => $utilisateur["prenom"],
            "email" => $utilisateur["email"]

        ];
    }


    public function disconnect()
    {
        unset($_SESSION['utilisateur']);
    }


    public function delete()
    {

        $sql = "DELETE FROM `utilisateurs` WHERE id = :id";

        //ON PREPARE LA REQUETE
        $requete = $this->bdd->prepare($sql);

        //ON INJECTE LES VALEURS AVEC LA FONCTION "bindValue"
        //PDO::PARAM_STR Pour dire que notre paramètre est une chaine de carractère
        $requete->bindValue(":id", $this->id, PDO::PARAM_STR);

        //ON EXECUTE LA REQUETE
        $requete->execute();

        unset($_SESSION['user_connect']);
    }



    public function update($nom, $prenom, $email, $password)
    {
        $sql = "UPDATE `utilisateurs` SET `nom`= :nom,`prenom`= :prenom,`email`= :email,`password`= :password,";

        //ON PREPARE LA REQUETE
        $requete = $this->bdd->prepare($sql);

        //ON INJECTE LES VALEURS AVEC LA FONCTION "bindValue"
        //PDO::PARAM_STR Pour dire que notre paramètre est une chaine de carractère
        $requete->bindValue(":nom", $nom, PDO::PARAM_STR);
        $requete->bindValue(":prenom", $prenom, PDO::PARAM_STR);
        $requete->bindValue(":email", $email, PDO::PARAM_STR);
        $requete->bindValue(":password", $password, PDO::PARAM_STR);


        //ON EXECUTE LA REQUETE
        $requete->execute();

        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->email = $email;
        $this->password = $password;

        $_SESSION['utilisateur']['nom'] = $nom;
        $_SESSION['utilisateur']['prenom'] = $prenom;
        $_SESSION['utilisateur']['password'] = $password;
        $_SESSION['utilisateur']['email'] = $email;
    }


    public function isConnected()
    {
        if (!empty($_SESSION['utilisateur'])) {
            return true;
        } else {
            return false;
        }
    }
}
