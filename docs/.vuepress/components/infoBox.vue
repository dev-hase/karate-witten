<template>
    <div class="infoBox">
        
        <img :src="infoImg" :alt="infoTitle" class="titleImg" />

        <img v-if="isSecondImg" :src="secondImg" />

        <span>
            <slot />
        </span>



    </div>    
</template>

<script>  
export default {
    props: ["infoImg", "secondImg"],

    computed: {
        isSecondImg: function () {
            if (this.secondImg) return true
            else return false
        },
        
    }    

};  
</script>


<style lang="stylus" scoped>

.infoBox

    display grid
    grid-template-columns 3fr 5fr

    grid-gap 2.25rem
    margin 3rem 0

    @media (max-width $MQMobile)
        grid-gap 1rem
        grid-template-columns 1fr 2fr
    @media (max-width $MQMobileNarrow)
        display flex
        flex-direction column-reverse
        

    img
        //grid-column 1
        align-self center

        //border 3px solid transparent
        border-style solid
        border-color transparent
        border-image-width 3px
        box-sizing border-box


        border-image-slice 45 38 36 56 
        border-image-width 9px 9px 9px 9px 
        border-image-outset 4px 4px 4px 4px 
        border-image-repeat stretch stretch 
        border-image-source url('/img/frame.png')

        -webkit-border-image-slice 45 38 36 56 
        -webkit-border-image-width 9px 9px 9px 9px 
        -webkit-border-image-outset 4px 4px 9px 9px 
        -webkit-border-image-repeat stretch stretch 
        -webkit-border-image-source url('/img/frame.png') 

    span
        grid-column 2
        grid-row 1 / span 2

        h3
            margin-top 0.5rem


</style>