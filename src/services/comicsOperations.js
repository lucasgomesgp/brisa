export async function getAllComics(limitComics) {
    const timestamp = 1;
    let limit = limitComics | 20;
    try{
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}?ts=${timestamp}&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}&limit=${limit}`)
        return result;
    }catch(err){
        alert("Erro ao buscar todos os Comics!");
    }
}

export async function getOneComic(id) {
    const timestamp = 1;
    let idComic = id | 1000;
    try{
        let result = await fetch(`${process.env.REACT_APP_BASE_URL}/${idComic}?ts=${timestamp}&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}`)
        return result;
    }catch(err){
        alert("Erro ao buscar todos os Comics!");
    }
}
