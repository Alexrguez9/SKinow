<template>
    <div class="flex-container"></div>
    <!--
            <img class="iconos" src="../assets/images/icons/whatsapp.png" alt="whatsappIcon">
            <img class="iconos" src="../assets/images/icons/facebook.png" alt="facebookIcon">
            <img class="iconos" src="../assets/images/icons/email.png" alt="emailIcon">
            <img class="iconos" src="../assets/images/icons/instagram.png" alt="instagramIcon">   
            <img class="iconos" src="../assets/images/icons/linkedin.png" alt="linkedinIcon">       
            <img class="iconos" src="../assets/images/icons/github.png" alt="githubIcon">     
     -->          
        
        <div class="flex-menu-container">
            <li class="menu-item">Legal</li>
            <li class="menu-item">Cookies</li>
            <li class="menu-item">Privacy</li>
        </div>
        <div class="info">
            <h3>Dirección</h3>
            <p>Madrid - España </p>
        </div>
        <div>
            <span class="menu-item">&copy;Copyright Todos los derechos reservados.</span>
        </div>

</template>


<style scoped>
*{
    background-color:#151515;
}

.flex-container{
    display: flex;
    padding: 2%;
    justify-content: center;
    justify-items: center;
   
}
.iconos{
    border: 3px solid white;
    flex-basis: 200px;
    flex-grow: 1;
    text-align: center;
    font-size: 5px;

}



.info{
    color: white;
}
.menu-item{
	text-align: center;
    color: white;
}/*??????????????????*/
</style>