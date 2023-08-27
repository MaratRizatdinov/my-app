export async function getAllTracks(){
    
        const response = await fetch( 'https://painassasin.online/catalog/track/all/');

        if(!response.ok){
            
            throw new Error('Ошибка сервера');
        }
        const data = response.json();
        return data;   
    
}
