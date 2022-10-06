<template>
    
    <div class="section">
        
        <div class="flex-container">
            <div class="flex-item">
                <h3 class="sub-title">Skis</h3>
                <div class="info-container">
                  <router-link to="/skis" active-class="active"><img src="../assets/images/skis.avif" alt="Skis"></router-link>
                </div>
            </div>
            <div class="flex-item">
                <h3 class="sub-title">Ski Bindings</h3>
                <div class="info-container">
                    <router-link to="/skis" active-class="active"><img src="../assets/images/glasses.jpg" alt="Snowboard"></router-link>
                </div>
            </div>
            <div class="flex-item">
                <h3 class="sub-title">Ski Boots</h3>
                <div class="info-container">
                  <router-link to="/skis" active-class="active"><img src="../assets/images/skiBoots2.jpg" alt="Lodging"></router-link>
                </div>
            </div>

        </div>
    
        
    </div> 
</template>
<style lang="scss">

.section{
    width: 100%;
    background-color: #151515;
}
.flex-container{
    max-width: 100%;
    display: flex;
    /* justify-content: space-around; */
}
.flex-item{
    
    padding: 2%;
    padding-top: 5%;
    flex: 33%
}

.sub-title{
    font-family: gotham;
    font-weight: lighter;
    color: #fff;
    font-size: 50px;
    padding-bottom: 20px;
    text-align: center;
}
/*
.info-container{
    display: flex;
    align-items: center;
    justify-content: center;

}*/
.text{
    font-family: gotham;
    font-weight: lighter;
    color: #fff;
    font-size: 14px;
    padding-right: 30px;
    text-align: center;
    text-justify: inter-word;
}
img{
    width: 40%;
    border-radius: 20px;
    object-fit: cover;
    transition: 0.7s;
}

img:hover{
    width: 50%;
    transition: 0.7s;
}
a{
  display: flex;
  align-items: center;
  justify-content: center;
}

/*
.shadow{
	position: absolute;
	bottom: 100%;
	height: 150px;
	width: 100%;
	left: 0;
	z-index: 20;
	background: linear-gradient(to top, #151515, transparent);
}
*/



@media (max-width: 800px) {
  .flex-item{
    flex: 100%;
  }
}
</style>