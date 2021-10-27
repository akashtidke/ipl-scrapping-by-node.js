const request=require("request");
const cheerio=require("cheerio");
const fs=require("fs");
const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";
request(url,cb);
function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
        hwtp(html);
    }
}
function hwtp(html){
    
//     let teamName="";
//  let teamArr= $(".match-info.match-info-MATCH.match-info-MATCH-half-width .team");
//  for(let i=0;i<teamArr.length;i++){
//      let hasclass=$(teamArr[i]).hasClass("team-gray");
//      if(hasclass==false){
//           teamName=$(teamArr[i]).find(".name");
//         // console.log(teamName.text().trim());
//      }

//  }
//  let scoreboardArr=$(".card.content-block.match-scorecard-table .Collapsible")
//  for(let i=0;i<scoreboardArr.length;i++){
// let ans2=scoreboardArr.html();

// console.log(ans2);
// let teamNameArr=$(scoreboardArr[i]).find(".header-title.label");
// let steamName=teamNameArr.text();
//  console.log(steamName.split("INNINGS")[0]);

//  }  
let searchTool=cheerio.load(html);
let ele=searchTool(".table.bowler tbody tr")
// console.log("lenth table",ele.length);
// let htmldata="";
// for(let i=0;i<ele.length;i++){
// htmldata+=searchTool(ele[i]).html();
// }
// fs.writeFileSync("table.html",htmldata);
let bname="";
let hwt=0;
for(let i=0;i<ele.length;i++){
    let cols=searchTool(ele[i]).find("td");
    //console.log(cols);
    let name=searchTool(cols[0]).text();
    let wicket=searchTool(cols[4]).text();
   
    // for(let i=0;i<wicket.length;i++){
    //     console.log(wicket[i]);
    // }
    if(wicket>=hwt){
        bname=name;
        hwt=wicket;
    }

   // console.log(name+" "+ wicket);
 
   
}
console.log(bname+" "+hwt);
}