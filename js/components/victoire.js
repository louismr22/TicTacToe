import tpl from '../avecTemplateHtml'

export default tpl({
    template: 'victoire.html',
    data: function() {
        return {
            victoire: null,
            tourActuel: null
        }

    },
    mounted() {
        this.tourActuel = this.$route.params.tourActuel        
    }
    
})