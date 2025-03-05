//document.querySelector('.coffee-menu-links').addEventListener('click',()=>{
//    console.log(document.querySelector('.coffee-menu-links').getAttribute('value'))
//})
//var tabs = document.querySelectorAll('.coffee-menu-links');
//
//for (i = 0; i < tabs.length; ++i) {
//    var tabsValue = tabs[i].getAttribute('value')
//    let tabsData = tabsValue
//    tabs[i].addEventListener('click', () => {
//        //console.log(tabsData)
//        let newText = tabsData;
//        let newURL = window.location.origin + window.location.pathname + "?//tabs=" + newText;
//        history.pushState(null, "", newURL);
//    })
//
//
//    if (window.location.search.includes('tabs')) {
//        const params = new URLSearchParams(window.location.search);
//        const lastText = params.get('tabs'); // Get the value of 'tabs'
//        console.log(lastText);
//    }
//};