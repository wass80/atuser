function main(){
  ATCODER.standings.data.forEach((data)=>{
    data.user_name = data.user_screen_name
  });
  const activeBtn = document.querySelector(".li-pagination.active>a");
  activeBtn.click();
}

const script = document.createElement("script");
script.appendChild(document.createTextNode(`(${main.toString()})()`));
document.body.appendChild(script);
