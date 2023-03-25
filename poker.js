

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

        /**
         * 
         * @param {number|2} players Player amounts
         */
        constructor(players=2){
            if(isNaN(players)){
                throw new Error("Player amount not a number!");
            }
            this.playerAmount = players;
            this.poker = [
                "CA","C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","CJ","CQ","CK",
                "DA","D1","D2","D3","D4","D5","D6","D7","D8","D9","D10","DJ","DQ","DK",
                "HA","H1","H2","H3","H4","H5","H6","H7","H8","H9","H10","HJ","HQ","HK",
                "SA","S1","S2","S3","S4","S5","S6","S7","S8","S9","S10","SJ","SQ","SK"
            ];
            // this.own = new Array(52).fill(-1);
            this.turn = 0;
            this.pointer = 0;
            this.hand = new Array(players).fill(-1);
            this.poker.sort((a,b)=>Math.random()-Math.random());
        }

        start(){
            for(let i=0;i<this.playerAmount;i++){
                for(let j=0;j<5;j++){
                    
                }
            }
        }


    }