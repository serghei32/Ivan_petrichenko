const first_answer=+prompt('how many film did you see', ' 10')
//******************* */
//2
const personalMovieDB={}
personalMovieDB.count= `${first_answer}`
personalMovieDB.movies={}
personalMovieDB.actors ={}
personalMovieDB.genres =[]
personalMovieDB.privat =false

//3
const amount=prompt('Один из последних просмотренных фильмов?')
const age=prompt('На сколько оцените его?')

personalMovieDB.movies[amount]=age
console.log(personalMovieDB);