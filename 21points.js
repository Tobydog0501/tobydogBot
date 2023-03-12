/** Point 21
 *  mini game based on poker
 *  A,1,2,3,4,5,6,7,8,9,10,J,Q,K
 *  Club, Diamond,Heart,Spade
 * 
*/

module.exports = 
    class point21{

        constructor(players){
            if(isNaN(players)){
                throw new Error("Player amount not a number!");
            }
            this.players = players;
            this.poker = [
                "CA","C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","CJ","CQ","CK",
                "DA","D1","D2","D3","D4","D5","D6","D7","D8","D9","D10","DJ","DQ","DK",
                "HA","H1","H2","H3","H4","H5","H6","H7","H8","H9","H10","HJ","HQ","HK",
                "SA","S1","S2","S3","S4","S5","S6","S7","S8","S9","S10","SJ","SQ","SK"
            ];
            this.own = new Array(52).fill(-1);
            this.turn = 0;
            this.pointer = 0;
            this.lose = new Array(players).fill(-1);
            this.poker.sort((a,b)=>Math.random()-Math.random());
        }

        start(){
            for(let n=0;n<2;n++){
                for(let i=0;i<this.players;i++){
                    this.own[i+this.players*n] = i;
                    this.pointer += 1;
                }
            }
            
            return;
        }

        take(player){
            this.own[this.pointer] = player;
            console.log(this.poker[this.pointer])
            this.pointer += 1;
            var count = 0;
            var As = 0;
            for(let i=player;i<=52;i++){
                if(this.own[i]==-1){
                    break;
                }
                if(this.own[i]!=player){
                    continue;
                }
                if(this.poker[i].endsWith("A")){
                    As += 1;
                    count += 1;
                }else if(/.\d/.test(this.poker[i])){    //sus
                    count += parseInt(this.poker[i].match(/\d+/));
                }else{
                    count += 10;
                }
            }
            if(count>21){   //lose
                this.lose[player] = 0;
                return -1;
            }
            if(count<21&&As>0){
                while(count<=11&&As>0){ //Check if A can see as 11
                    count += 10;
                    As -= 1;
                }
            }
            return count;

        }

        main(decide,player){
            if(this.lose.filter((v,i)=>{v==-1}).length==1){
                //Winner Decided
                return;
            }
            if(decide==0){
                //Pass
            }else{
                let a = this.take(player);
                if (a==-1){
                    //Tell lose
                    return;
                }
                return; //new count
            }

        }

        count(player){
            var count = 0;
            var As = 0;
            for(let i=player;i<=52;i++){
                if(this.own[i]==-1){
                    break;
                }
                if(this.own[i]!=player){
                    continue;
                }
                if(this.poker[i].endsWith("A")){
                    As += 1;
                    count += 1;
                }else if(/.\d/.test(this.poker[i])){
                    count += parseInt(this.poker[i].at(-1));
                }else{
                    count += 10;
                }
            }
            if(count<21&&As>0){
                while(count<=11&&As>0){ //Check if A can see as 11
                    count += 10;
                    As -= 1;
                }
            }
            return count
        }

    }