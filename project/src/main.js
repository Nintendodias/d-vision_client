import Vue from 'vue';
import App from './App.vue';

// !
import VueRouter from "vue-router";
import page_main from "./pages/page_main.vue"
import page_projects from "./pages/page_projects.vue"

Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        component: page_main,
    },
    {
        path: "/projects",
        component: page_projects,
    },
  ];

const router = new VueRouter({
    routes,
    mode: "history",
});
// -!

Vue.config.productionTip = false

new Vue({
    //!
    router,
    //-!
    render: h => h(App),
}).$mount('#app')

window.addEventListener('load', () => {
    document.body.classList.add('_load');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(({
                isIntersecting,
                target
            }) => {
                if (!isIntersecting) {
                    return;
                }
                target.classList.add('_visible');
            });
        }, {
            threshold: 0.3,
        },
    );
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => observer.observe(section));
});

window.addEventListener('load', function () {
    var $animations = document.querySelectorAll('.animation');
    console.log($animations)

    $animations.forEach(function ($animation) {
        var _$animation$dataset = $animation.dataset,
            _$animation$dataset$d = _$animation$dataset.duration,
            duration =
            _$animation$dataset$d === void 0 ? '0' : _$animation$dataset$d,
            _$animation$dataset$d2 = _$animation$dataset.delay,
            delay =
            _$animation$dataset$d2 === void 0 ?
            '0' :
            _$animation$dataset$d2;

        duration = duration
            .split(', ')
            .map(function (d) {
                return ''.concat(d, 's');
            })
            .join(',');
        delay = delay
            .split(', ')
            .map(function (d) {
                return ''.concat(d, 's');
            })
            .join(',');

        $animation.style.animationDuration = ''.concat(duration);
        $animation.style.animationDelay = ''.concat(delay);
    });
});