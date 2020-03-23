import tpl from '../avecTemplateHtml'

export default tpl({
    template: 'jeux.html',
    data: function() {
        return {
            tourActuel: 'O', // Premier tour pour O
            victoire: null, // X ou O
            tourJouer: 0,

            A: "",
            B: "",
            C: "",
            D: "",
            E: "",
            F: "",
            G: "",
            H: "",
            I: "",

            O: "O",
            X: "X",

        }
    },

    methods: {

        jeux() {

                this.tourJouer++
                this.testVictoire();
                this.tourActuel = (this.tourActuel == this.O) ? this.X : this.O

        },

        click(play) {
            if (play == "A" && this.A == "") {
                this.A = this.tourActuel
            }

            if (play == "B" && this.B == "") {
                this.B = this.tourActuel
            }

            if (play == "C" && this.C == "") {
                this.C = this.tourActuel
            }

            if (play == "D" && this.D == "") {
                this.D = this.tourActuel
            }

            if (play == "E" && this.E == "") {
                this.E = this.tourActuel
            }

            if (play == "F" && this.F == "") {
                this.F = this.tourActuel
            }

            if (play == "G" && this.G == "") {
                this.G = this.tourActuel
            }

            if (play == "H" && this.H == "") {
                this.H = this.tourActuel
            }

            if (play == "I" && this.I == "") {
                this.I = this.tourActuel
            }

            this.jeux()
        },

        testVictoire() {
            if (this.A == this.X && this.B == this.X && this.C == this.X) {
                this.victoire = this.X
            }

            if (this.D == this.X && this.E == this.X && this.F == this.X) {
                this.victoire = this.X
            }

            if (this.G == this.X && this.H == this.X && this.I == this.X) {
                this.victoire = this.X
            }

            if (this.A == this.X && this.D == this.X && this.G == this.X) {
                this.victoire = this.X
            }

            if (this.B == this.X && this.E == this.X && this.H == this.X) {
                this.victoire = this.X
            }

            if (this.B == this.X && this.E == this.X && this.H == this.X) {
                this.victoire = this.X
            }

            if (this.C == this.X && this.F == this.X && this.I == this.X) {
                this.victoire = this.X
            }

            if (this.A == this.X && this.E == this.X && this.I == this.X) {
                this.victoire = this.X
            }

            if (this.G == this.X && this.E == this.X && this.C == this.X) {
                this.victoire = this.X
            }

            

            if (this.A == this.O && this.B == this.O && this.C == this.O) {
                this.victoire = this.O
            }

            if (this.D == this.O && this.E == this.O && this.F == this.O) {
                this.victoire = this.O
            }

            if (this.G == this.O && this.H == this.O && this.I == this.O) {
                this.victoire = this.O
            }
            
            if (this.A == this.O && this.D == this.O && this.G == this.O) {
                this.victoire = this.O
            }

            if (this.B == this.O && this.E == this.O && this.H == this.O) {
                this.victoire = this.O
            }

            if (this.B == this.O && this.E == this.O && this.H == this.O) {
                this.victoire = this.O
            }

            if (this.C == this.O && this.F == this.O && this.I == this.O) {
                this.victoire = this.O
            }

            if (this.A == this.O && this.E == this.O && this.I == this.O) {
                this.victoire = this.O
            }

            if (this.G == this.O && this.E == this.O && this.C == this.O) {
                this.victoire = this.O
            }

            if (this.victoire != null ){
                this.$router.push({path: 'victoire/' + this.tourActuel})
            }

            if (this.victoire == null && this.tourJouer == "9") {
                this.$router.push({path: 'draw/'})
            }
        }
        
    },
})