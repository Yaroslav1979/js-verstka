import { 
    createElement,
    createHeader,
     } from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', "Ком'юніті")

page.append(title)


//---------------------------------------------------------------

const createKnowledgeBase = () => {
    const tabsContainer = createElement('div', 'tabs');
    const knowledgeTabButton = createElement('button', 'tab', 'База знань');
    const infoTabButton = createElement('button', 'tab', 'Інформація');
    const mainContent = createElement('main', 'post__list');

    const heroImage = createElement('img', 'hero');
    heroImage.src = '/img/visitka.png';
    heroImage.alt = 'hero';

    const subtitle = createElement('h2', 'subtitle', 'Що таке база знань?');

    const postInfo = createElement('p', 'post__info');
    postInfo.innerHTML = 'База знаний — база данных, содержащая правила ' +
        'вывода и информацию о человеческом опыте и ' +
        'знаниях в некоторой предметной области. ' +
        'В самообучающихся системах база знаний также ' +
        'содержит информацию, являющуюся результатом решения ' +
        'предыдущих задач.';

    const telegramLink = createElement('a', 'link', 'Перейти до ком\'юніті у Телеграм');
    telegramLink.href = '#';

    // Додаємо створені елементи до відповідних контейнерів
    tabsContainer.appendChild(knowledgeTabButton);
    tabsContainer.appendChild(infoTabButton);

    mainContent.appendChild(heroImage);
    mainContent.appendChild(subtitle);
    mainContent.appendChild(postInfo);
    mainContent.appendChild(telegramLink);

    // Створюємо об'єкт для повернення контейнера
    const knowledgeBase = {
        tabsContainer,
        mainContent,
    };

    return knowledgeBase;
};
const knowledgeBase = createKnowledgeBase();

// Додаємо контейнери до сторінки
page.appendChild(knowledgeBase.tabsContainer);
page.appendChild(knowledgeBase.mainContent);
//-------------------------------------







// const TAB_LIST = [
//     {
//         text: 'База знань', 
//         id: 1
//     },
//     {
//         text: 'Інформація',
//         id: 2
//     },
// ]

// const createTabs = () => {
//    const tabs = createElement('div', 'tabs')
// }




// const POST_LIST = [
//     {
//         category: [
//             { text: 'Важливо', id: 1 },
//             { text: 'Нова', id: 2 },
//         ],
//         info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
//         date: '25.01',
//         viewed: false
//     },
//     {
//         category: [
//             { text: 'Нова', id: 2 },
//         ],
//         info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
//         date: '24.01',
//         viewed: true
//     },
// ]

// const createPost = () => {
//  const postList = createElement('main', 'post__list')

// POST_LIST.forEach((postData) => {
//     const post = createElement(
//         'div',
//         postData.viewed 
//         ? 'post button post--viewed'
//         : 'post button',
//     )

//     const postHeader = createElement('div', 'post__header')

//     const categoryList = createElement(
//         'div',
//         'post__category-list',
//     )

//     postData.category.forEach((category) => {
//         const categorySpan = createElement(
//             'span',
//             `post__category post__category--${category.id}`,
//             category.text,
//         )
//         categoryList.append(categorySpan)
//     })

//     const dateSpan = createElement(
//         'span',
//         'post__date',
//         postData.date,
//     )

//     postHeader.append(categoryList, dateSpan)

//     const infoParagraph = createElement(
//         'p',
//         'post__info',
//         postData.info,
//     )
//     post.append(postHeader, infoParagraph)

//     postList.append(post)
//     })
// return postList
// }
// const post = createPost()
// page.append(post)
    
    