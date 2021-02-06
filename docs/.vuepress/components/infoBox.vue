<template>
    <div class="infoBox">
        
        <img :src="infoImg" :alt="infoTitle" />

        <div class="infoBoxDesc">
            <slot/>
        </div>
        
    </div>    
</template>

<script>  
export default {
    props: ["infoImg", "infoTitle", "infoDesc"],

};  
</script>


<style lang="stylus" scoped>

.infoBox
    //background red
    //padding 1rem

    display grid
    grid-template-columns 3fr 5fr
    grid-template-rows 1fr
    grid-gap 2.25rem
    margin-bottom 3rem

    @media (max-width $MQMobile)
        grid-gap 1rem
        grid-template-columns 1fr 2fr

    img
        grid-column 1

        border 3px solid transparent
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

    div
        h3
            margin-top 0.5rem


    .infoBoxDesc
        grid-column 2



</style>