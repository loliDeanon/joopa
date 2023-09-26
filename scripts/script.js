// Массивы для вопросов и правильных ответов
let questions = [["860"," поход Руси на Константинополь"],[" 862"," «Призвание» Рюрика"],[" 882"," захват Олегом Киева"],[" 907"," поход Олега на Константинополь"],
[" 911"," договор Руси с Византией"],[" 941, 944"," походы Игоря на Константинополь, договор Руси с Византией"],
[" 964-972"," походы Святослава"],[" 978/980-1015"," княжение Владимира Святославича в Киеве"],[" 988"," Крещение Руси"],[" 1016-1018 и 1019-1054"," Княжение Ярослава Мудрого"],
[" XI в."," Правда Русская (Краткая редакция)"],[" 1097"," Любечский съезд"],[" 1113-1125"," Княжение в Киеве Владимира Мономаха"],[" 1125-1132"," Княжение в Киеве Мстислава Великого"],
[" Начало XII в."," «Повесть временных лет»"],[" XII в."," Правда Русская (Пространная редакция)"],[" 1147"," первое упоминание Москвы"],[" 1185"," Поход Игоря Святославича на половцев"],
[" 1223"," Битва на р. Калке"],[" 1237-1241"," завоевание Руси Монгольской империей"],[" 1240, 15 июля"," Невская битва"],[" 1242, 5 апреля"," Ледовое побоище"],
[" 1242-1243"," Образование Золотой Орды"],[" 1325-1340"," княжение Ивана Калиты."],[" 1327"," Антиордынское восстание в Твери"],
["1359-1389"," Княжение Дмитрия Донского"],[" 1378, 11 августа"," Битва на р. Воже"],[" 1380, 8 сентября"," Куликовская битва"],[" 1382"," разорение Москвы Тохтамышем"],
[" Битва на Косовом поле"],[" 1389 – 1425"," княжение Василия I"],
[" 1395"," Разгром Золотой Орды Тимуром"],[" 1410, 15 июля"," Грюнвальдская битва"],[" 1425-1453"," Междоусобная война в Московском княжестве"],
[" 1425-1462"," Княжение Василия II"],[" 1448"," Установление автокефалии Русской церкви"],[" 1462-1505"," Княжение Ивана III"],
[" 1478"," Присоединение Новгородской земли к Москве"],[" 1480"," «Стояние» на р. Угре"],
[" 1485"," Присоединение Тверского великого княжества к Москве"],[" 1497"," Принятие первого общерусского Судебника"],[" 1505 – 1533"," Княжение Василия III"],
[" 1533 – 1584"," Княжение (царствование) Ивана IV Васильевича Грозного."],[" 1533 – 1538"," Регентство Елены Глинской"],[" 1547"," Принятие Иваном Грозным царского титула"],
[" 1549"," Первый Земский собор"],[" 1550"," Принятие Судебника"],[" 1552"," Взятие русскими войсками Казани"],[" 1556"," Присоединение к России Астраханского ханства"],
[" 1556"," отмена кормлений"],[" 1558 – 1583"," Ливонская война"],[" 1564"," Издание первой российской печатной книги"],[" 1565 – 1572"," Опричнина"],
[" 1589"," учреждение в России патриаршества"],[" 1598 – 1605"," царствование Бориса Годунова"],[" 604 – 1618"," Смута в России"],[" 1605 – 1606"," правление Лжедмитрия I."],
[" 1606 – 1610"," Царствование Василия Шуйского"],[" 1606-1607"," Восстание Ивана Болотникова"],[" 1607 – 1610"," движение Лжедмитрия II."],
[" 1611 – 1612"," I и II Ополчения. Освобождение Москвы."],[" 1613 – 1645"," Царствование Михаила Федоровича"],[" 1617"," Столбовский мир со Швецией"],
[" 1618"," Деулинское перемирие с Речью Посполитой"],[" 1632 – 1634"," Смоленская война"],[" 1645 – 1676"," царствование Алексея Михайловича"],
[" 1648"," Соляной бунт в Москве"],[" 1648"," Поход Семена Дежнева"],[" 1649"," Принятие Соборного Уложения. Оформление крепостного права в центральных регионах страны"],
[" 1649 – 1653"," походы Ерофея Хабарова"],[" 1653"," реформы патриарха Никона, начало церковного раскола"],[" 1654"," Переяславская Рада. Переход под власть России Левобережной Украины"],
[" 1654 – 1667"," война с Речью Посполитой."],[" 1656 – 1658"," война со Швецией."],
[" 1662"," Медный бунт"],[" 1667"," Андрусовское перемирие"],[" 1670 – 1672"," Восстание Степана Разина"],[" 1676 – 1682"," царствование Федора Алексеевича."]];
let el_question = document.getElementsByClassName("question");
let el_answer = document.getElementsByClassName("answer");
// let count_array = 0; // счётчик индекса в массивах

// функция выбора рандомных вопросов+диапозоны
let using_diapason = [];
function Qdiapason(){
    let counter = 0;
    let question_numbers = [];
    let diapasons = Math.ceil(questions.length / 20); 
    // console.log("diapasons "+diapasons);
    let diapason = randomNumb(1,diapasons);
    // console.log("ddiapason = "+diapason);
    if(using_diapason[diapason] != true){
        using_diapason[diapason] = true;
        if(questions.length - diapason*20 >=0){
            QPoolRandom((diapason - 1)*20,diapason*20);
            console.log("question_numbers(QD)("+question_numbers.length + "): "+question_numbers + "  ddiapason = " + diapason);
            return question_numbers;
        }
        else{
            QPoolRandom((diapason-1)*20, diapason*20  - (diapason*20 - questions.length));
            console.log("question_numbers(QD)("+question_numbers.length + "): "+question_numbers + "  ddiapason = " + diapason);
            return question_numbers;
        }
    }
    else {
        // console.log("else diapason = "+diapason);
        Qdiapason();
    }
    function QPoolRandom(start_diapason,end_diapason){
       if (counter < end_diapason - start_diapason - 5){
           start_diapason = Math.ceil(start_diapason);
           end_diapason = Math.floor(end_diapason);
           number = Math.floor(Math.random() * (end_diapason - start_diapason + 1)) + start_diapason; //Максимум и минимум включаются
           if (question_numbers.includes(number)){
               QPoolRandom(start_diapason,end_diapason);
           }
           else{
               question_numbers[counter] = number;
               counter++;
               QPoolRandom(start_diapason,end_diapason);
           }
       }
       else{   
           for(let i = 0; i < end_diapason - start_diapason; i++){
               if (question_numbers[i] == undefined){
                   for(let j = start_diapason;j<=end_diapason;j++){
                       if(question_numbers.includes(j) == false){
                           question_numbers[i] = j;
                       }
                   }
               }
           }
       }
    }
}
console.log("questions.lenhth = " + questions.length);
let question_numbersTest = [];
for(let i = 0; i<3;i++){
question_numbersTest = Qdiapason();
console.log("i = "+ i);
console.log("question_numbers("+question_numbersTest);
// +question_numbersTest.length + "): "
}

// Алгоритв, подставляет вопросы, а так же ответы.

function test(){
    let question_numbers;
    console.log(questions.length);
    for(let i = 0; i<=Math.floor(questions.length / 20);i++){
        question_numbers = Qdiapason();
        console.log(question_numbers);
        for (let j = 0;j<question_numbers.length;j++){
            el_question[0].innerHTML = questions[question_numbers[j]][1];
            let true_answer_numb = randomNumb(0, 3);
            for(let n = 0; n<4; n++){
                if(n == true_answer_numb){
                    el_answer[n].innerHTML=questions[j][0];
                }
            }
        }
    }
}
// функция рандома  
function randomNumb(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
//   test();
