<template>
     <div class="container-footer-all">
        <div class="container-body-footer">
            <div class="row">
                <div class="columns">
                    <h3>Dirección</h3>
                    <p>Madrid - España </p>
                </div>
                <div class="columns">
                    <h3>Mis redes</h3>
                    <ul class="list-inline">
                        <li>
                            <a target="_blank" href="#" class="btn-social btn-outline">Instagram<i class="fa fa-fw fa-instagram"></i></a>
                            <img src="../assets/images/icons/whatsapp.png" alt="whatsappIcon">
                        </li>
                        <li>
                            <a target="_blank" href="#" class="btn-social btn-outline">Facebook<i class="fa fa-fw fa-facebook"></i></a>
                        </li>
                        <li>
                            <a target="_blank" href="#" class="btn-social btn-outline">Twitter<i class="fa fa-fw fa-twitter"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="columns">
                    <h3>Trabajo FreeLancer</h3>
                    <p>Tengo más de X años de experiencia en maquetación web y me apasiona lo que hago!</p>
                </div>
            </div>
        </div>
        <div class="container-footer">
            <div class="text-color">Copyright © Todos los derechos reservados </div>
            <div class="information" >
                <a class="text-color" href="">Informacion del autor</a>
                <a class="text-color" href="">Política de privacidad</a>
                <a class="text-color" href="">Términos y condiciones</a>
            </div>
        </div>
    </div>
</template>


<style scoped>
*{
    background-color:#151515;
}

footer{
	width: 100%;
	background-color: #151515;
}

.container-footer-all{
	width: 100%;
	margin:auto;
}

.container-body-footer{
	display: flex;
	width: 100%;
}

.container-footer{
	margin-top: 5px;
	width: 100%;
	display: flex;
}
	

.row{
	text-align: center;
	color: #fff;
	font-size: 12px
	
}

.columns{
	float: left;
	margin: 20px;
}


.information{
	text-align: right;
}/*??????????????????*/
</style>