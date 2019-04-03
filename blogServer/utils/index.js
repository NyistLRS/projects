exports.getUnique = (n) => {
    let str = '',len = n?n:15,temp
    for(let i = 0;i<len; i++){
        if(i==0){ // 第一位排除0
            if (Math.random() * 10 > 0 && Math.random() * 10 < 1) {
                temp = Math.ceil(Math.random() * 10)
            } else {
                temp = Math.floor(Math.random() * 10)
            }
        }else{
            temp = Math.floor(Math.random() * 10)
        }
        str+=temp
    }
    return str
}