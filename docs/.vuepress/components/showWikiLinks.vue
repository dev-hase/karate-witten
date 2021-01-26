<template>

    <section class="wikiLinks">
        <div class="wikiLinkBlock collapsed">
            <h2 v-on:click='changeSize'>Kata</h2>
            <showPath path="/kata/" />
        </div>
        <div class="wikiLinkBlock collapsed">
            <h2 v-on:click='changeSize'>Grundlagen</h2>
            <showPath path="/grundlagen/" />
        </div>
        <div class="wikiLinkBlock collapsed">
            <h2 v-on:click='changeSize'>Prüfungsordnung</h2>    
            <showPath path="/pruefung/" />
        </div>  
    </section>

</template>

<script>
export default {

    methods: {
        changeSize: function() {
          //alert('tach');
          event.target.parentNode.classList.toggle("collapsed");
          //event.target.style.color = 'yellow';
 
        }
    }

};
</script>

<style lang="stylus">

.collapsed > .wikiLinkBlockLinks
    display none


.wikiLinks
    display grid
    grid-template-columns 1fr 1fr
    grid-gap 1rem

    @media (max-width 620px)
        grid-template-columns 1fr

.wikiLinkBlock
    border 3px solid transparent
    padding 1.5rem
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
    align-self flex-start
    position relative
    //padding-right 3rem
    z-index 1

    h2
        cursor pointer
        display flex
        width 100%
        //background yellow

.wikiLinkBlockLinks
    div
        padding .25rem 0

.wikiLinkBlock::after
    position absolute
    display inline-block
    right 2rem
    top 2.5rem
    content '>'
    transform rotate(90deg)
    font-size 2rem
    font-style normal
    font-weight bold
    transition .2s
    z-index -1
    color #494949

.collapsed.wikiLinkBlock::after
    transform rotate(0deg)

</style>