export default function checkFavorite(favorites, story){
    return favorites.includes(favorite => favorite.id === story.id)
}