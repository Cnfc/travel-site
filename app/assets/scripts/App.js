import MobileMenu from './modules/MobileMenu';
import revealOnScroll from './modules/revealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new revealOnScroll($(".feature-item"), "85%");
new revealOnScroll($(".testimonial"), "60%");
