const title=document.querySelector("h1");
const typewriter=new Typewriter(title, {
    loop:true,
    delay:100
})

typewriter
.typeString('Welcome to the Meal Finder!')
.pauseFor(2000)
.deleteAll()
.pauseFor(2000)
.typeString('Découvrez des recettes du monde entier ')
.pauseFor(2000)
.deleteAll()
.pauseFor(2000)
.typeString('Trouvez les ingrédients parfaits pour votre plat !')
.pauseFor(2000)
.deleteAll()
.pauseFor(2000)
.typeString('Cuisinez facilement avec notre Meal API !')
.pauseFor(2000)
.deleteAll()
.pauseFor(2000)
.start();