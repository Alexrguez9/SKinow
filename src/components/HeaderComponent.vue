<template>
	<div class="header">

	
    <body> 
        <header>
            <nav>
                <h1 class="brand" ><router-link to="/home" class="home">SK<span class="color-intermediate">IN</span>OW</router-link></h1>
                <!--</img>-->
                <ul>
                    <li><router-link :to="{name: 'destinations'}" class="cool-link" active-class="active">Destinations</router-link></li>
                    <li><router-link to="/festival" class="cool-link" active-class="active">Festival</router-link></li>
                    <li><router-link to="/about" class="cool-link" active-class="active">About</router-link></li>
                    <li><router-link to="/about" class="cool-link" active-class="active">Contact</router-link></li>
                </ul>
            </nav>
            <h2 class="center_title">Sk<span class="color-intermediate">iN</span>ow</h2>
            <div class="shadow">

            </div>
        </header>
    </body>
	</div>
</template>


<script>
//igual falla esto BUG!!!
export default {
    name: "HeaderComponent",
}
</script>


<style lang="scss" scoped>
@import "../assets/styles.scss";
.home{
    cursor: pointer;
}


.shadow{
    position: absolute;
    bottom: 0%;
	height: 150px;
	width: 100%;
	left: 0;
	z-index: 20;
	background: linear-gradient(to top, #151515, transparent);
}
header{
	width: 100%;
	height: 100vh;
	background-image: url(../assets/images/pexels-forest.jpeg);
	background-size: cover;

	transition: all 1s;
}
nav{
	width: 100%;
  transition: all 1s;
}
nav{
  position: fixed;
  width: 100%;
}

.brand{
	font-size: 1.7rem;
	font-weight: 300;
	transform: translateX(-100rem);
	animation: slideIn .5s forwards;
	margin-left: 40px;
}

nav{
  padding-top: 25px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-transform: uppercase;
	font-size: 1.1rem;
	margin-right: 5px;
}
nav ul{
	display: flex;
}
nav ul li{
	list-style: none;
	transform: translateX(100rem);
	animation: slideIn .5s forwards;
}


@keyframes slideIn{
	from{
	}
	to{
		transform: translateX(0);
	}
}


.center_title{
	font-size: 90px;
	font-family: gotham;
	font-weight: lighter;
	text-align: center; 
	position: absolute;
	left: 50%;
	top: 45%;
	transform: translateX(-50%) translateY(-50%);
	text-transform: uppercase;
}


</style>