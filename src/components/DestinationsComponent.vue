<template>
    <div class="section"> 
        <div class="flex-container">
            <h1 class="page-title">DESTINATIONS</h1>
            <div class="flex-item">
                <h3 class="title">Baqueira-Beret</h3>
                <div class="info-container">
                    <p class="text">Se trata de un deporte muy popular en los lugares en donde abunda la nieve, esto se debe a que su práctica se basa en la realización
                                    de diversas piruetas o acrobacias en superficies cubiertas de la misma, sobre una tabla fabricada especialmente para esto, en donde 
                                    los pies deben posarse uno adelante y otro detrás y deben estar sujetos para asegurar el agarre, por tal razón es denominado snowboard
                                    ya que éste es un término que deriva de la lengua inglesa y quiere decir tabla sobre la nieve.</p>
                    <img src="../assets/images/baqueira-valdaran.png" alt="Snowboard">
                </div>
            </div>
            <div class="flex-item">
                <h3 class="title">Grand-Valira</h3>
                <div class="info-container">
                    <p class="text">El término esquí deriva del francés ski, a su vez procedente de la lengua noruega. Así se denomina a un patín alargado que se emplea
                                    para deslizarse sobre el agua o la nieve. Por extensión, se llama esquí al deporte y actividad recreativa que se realiza sobre estas tablas.</p>
                    <img src="../assets/images/GV.jpg" alt="Ski">
                </div>
            </div>
            <div class="flex-item">
                <h3 class="title">Lodging</h3>
                <div class="info-container">
                    <p class="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque officiis quos expedita ipsa, a quidem inventore voluptates debitis accusamus
                                    tenetur qui et voluptas dicta, culpa earum, doloribus odio consectetur consequuntur soluta quasi nobis! Deserunt voluptatum reiciendis iure expedita 
                                    sequi quisquam laboriosam temporibus exercitationem.</p>
                    <img src="../assets/images/formigal.png" alt="Lodging">
                </div>
            </div>

        </div>
    
        
    </div>   
</template>

<style lang="scss" scoped>
@import "../assets/styles.scss";

.section{
	width: 100%;
	background-color: #151515;
    max-width: 100%;
}




.flex-container{
	max-width: 100%;

}

.flex-item{
    padding: 2%;
    padding-top: 5%;

}
.title{
	font-family: gotham;
	font-weight: lighter;
    color: #fff;
    font-size: 70px;
    padding-bottom: 40px;
    text-align: center;
}
.info-container{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 25%;
    margin-left: 25%;
    
}
.text{	
    font-family: gotham;
    font-weight: lighter;
    color: #fff;
    font-size: 17px;
    padding-right: 30px;
    text-align: left;
    text-justify: inter-word;
}
img{
	width: 50%;
	border-radius: 20px;
    object-fit: cover;
}

@media (max-width: 800px) {
  .flex-item{
    flex: 100%;
  }
}
</style>