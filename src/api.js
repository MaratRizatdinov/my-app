export async function getAllTracks(){
    
        const response = await fetch( 'https://painassasin.online/catalog/track/all/');

        if(!response.ok){
            
            throw new Error('Ошибка сервера');
        }
        const data = response.json();
        return data;   
    
}

export async function getRegisterInSite(email, password){
    const response =await fetch("https://painassasin.online/user/signup/", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          username: email,
        }),
        headers: {
          // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
          "content-type": "application/json",
        },
      })
    
      const data =response.json();
      return data;     

}

