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

const createPage = () => {

    const tabsContainer = createElement('div', 'tabs');
    const knowledgeTab = createElement('button', 'tab', 'База знань');
    const infoTab = createElement('button', 'tab', 'Інформація');
    
    tabsContainer.append(knowledgeTab);
    tabsContainer.append(infoTab);

    const mainContent = createElement('main', 'post__list');

    const heroImage = createElement('img', 'hero');
    heroImage.src = '/img/visitka.png';
    heroImage.alt = 'hero';

    const subtitle = createElement('h2', 'subtitle', 'Що таке база знань?');

    const postInfo = createElement('p', 'post__info');
    postInfo.innerHTML = 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.';

    const link = createElement('a', 'link', "Перейти до ком'юніті у Телеграм");
    link.href = '#';

  
    mainContent.append(heroImage);
    mainContent.append(subtitle);
    mainContent.append(postInfo);
    mainContent.append(link);

    
    const mainBlock = {
        tabsContainer,
        mainContent,
    };

    return mainBlock;
};

const mainBlock = createPage();

page.append(mainBlock.tabsContainer);
page.append(mainBlock.mainContent);

    
    