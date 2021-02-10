<template>
    <div class="fussnote">
     
        <img src="/img/logo2.png" class="logo2 karateDo" />
        <span class="logoDesc">Karate-Dō Witten | Turngemeinde Witten von 1848 e.V.</span>   
        <a href="http://www.tgwitten.de" alt="tgWitten" target="blank" class="tgWitten"> 
            <img src="/img/tg-witten.png" class="logo2" />
        </a>

    </div>    
</template>

<style lang="stylus" scoped>

.fussnote
    display flex
    align-items center
    justify-content space-around
    margin-top 3.5rem
    margin-bottom -4.5rem

.logoDesc
    margin 0 1.5rem
    font-weight bold
    @media (max-width $MQMobileNarrow)
        display none

.logo2
    border none

.tgWitten
    width 15rem
    @media (max-width $MQMobileNarrow)
        width 35vw
.karateDo
    width 8rem
    @media (max-width $MQMobileNarrow)
        width 20vw


</style>