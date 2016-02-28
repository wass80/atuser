function main(){
  ATCODER.standings.data.forEach((data)=>{
    const name = data.user_screen_name;
    data.user_screen_name = data.user_name;
    data.user_name = name;
  });
}

const script = document.createElement("script");
script.appendChild(document.createTextNode(`(${main.toString()})()`));
document.body.appendChild(script);
