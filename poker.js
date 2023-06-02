

module.exports = 
    /** Point 21
     *  mini game based on poker
     * 
     *  A,1,2,3,4,5,6,7,8,9,10,J,Q,K
     * 
     *  Club, Diamond,Heart,Spade
     * 
    */
    class poker{

        poker = [
            "CA","C2","C3","C4","C5","C6","C7","C8","C9","C10","CJ","CQ","CK",
            "DA","D2","D3","D4","D5","D6","D7","D8","D9","D10","DJ","DQ","DK",
            "HA","H2","H3","H4","H5","H6","H7","H8","H9","H10","HJ","HQ","HK",
            "SA","S2","S3","S4","S5","S6","S7","S8","S9","S10","SJ","SQ","SK"
        ];

        transfer = {
            "C" : 1,
            "D" : 2,
            "H" : 3,
            "S" : 4,
            "A" : 10,
            "2" : 20,
            "3" : 30,
            "4" : 40,
            "5" : 50,
            "6" : 60,
            "7" : 70,
            "8" : 80,
            "9" : 90,
            "1" : 100,
            "J" : 110,
            "Q" : 120,
            "K" : 130,
        }

        compare = {
            "Royal flush":0,
            "Straight flush":0,
            "Four of a kind" : 0,
            "Full house":0,
            "Straight":0,
            "Three of a kind":0,
            "Two pair":0,
            "pair":0
        }



        /**
         * 
         * @param {number|2} players Player amounts
         */
        constructor(players=2){
            if(isNaN(players)){
                throw new Error("Player amount not a number!");
            }
            this.playerAmount = players;
            // this.own = new Array(52).fill(-1);
            this.turn = 0;
            /**
             * Pointer to point out current player.
             * @type {int}
             */
            this.pointer = 0;
            this.poker.sort((a,b)=>Math.random()-Math.random());
            this.token = new Array(players).fill(0);
            /**
             * Each players' hand cards.
             * @type {Array<Array<string>>}
             */
            this.hand = new Array(players).fill(0).map(v=>{
                let tp = [];
                for(let j=0;j<5;j++){
                    let a = this.poker.pop()
                    tp.push(a);
                }
                return tp;
            });
            for(let handCards of this.hand){
                handCards.sort((a,b)=>{
                    return (this.transfer[a[0]]+this.transfer[a[1]]) - (this.transfer[b[0]]+this.transfer[b[1]]);
                })
            }
            console.log(this.hand);
        }


        call(){

        }

        raise(money){
            
        }


    }