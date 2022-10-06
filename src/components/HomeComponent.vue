<template>     
    <div class="section">
        
        <div class="flex-container">
            <div class="flex-item">
                <h3 class="title">Snowboard</h3>
                <div class="info-container">
                    <router-link to="/snowboards" active-class="active"><img src="../assets/images/snowboard.jpg" alt="Snowboard"></router-link>
                </div>
            </div>
            <div class="flex-item">
                <h3 class="title">Ski</h3>
                <div class="info-container">
                  <router-link to="/ski" active-class="active"><img src="../assets/images/ski.jpg" alt="Ski"></router-link>
                </div>
            </div>
            <div class="flex-item">
                <h3 class="title">Lodging</h3>
                <div class="info-container">
                  <router-link to="/lodging" active-class="active"><img src="../assets/images/lodging.jpg" alt="Lodging"></router-link>
                </div>
            </div>

        </div>
    
        
    </div>   
</template>



<script>
export default {
    
}
</script>

<style  scoped>

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

.title{
    font-family: gotham;
    font-weight: lighter;
    color: #fff;
    font-size: 70px;
    padding-bottom: 40px;
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
    width: 50%;
    border-radius: 20px;
    object-fit: cover;
    transition: 0.7s;
}

img:hover{
    width: 70%;
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